import React from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Button } from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useNotes } from "../../../state/hooks/query/notes/useNotes";
import Background from "../../../components/Background";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";

function NotesScreen() {
	// useNavigation
	const navigation = useNavigation();

	// useQuery
	const { data: userData, isLoading: isLoadingUser } = useUser();
	const { data, isLoading, isFetching } = useNotes();

	// functions
	const handleNavigateEditScreen = (id) => {
		if (!id) {
			return;
		}

		navigation.navigate("AddOrEditNote", { id });
	};

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				key={item.id}
				onPress={() => handleNavigateEditScreen(item.id)}>
				<View
					style={styles.goalBlock}
					key={item.id}>
					<Text style={styles.goalTitle}>{item.title}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Spinner visible={isLoading || isFetching || isLoadingUser} />
				<View style={styles.goals}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							hello, {userData?.first_name}
						</Text>
					</View>
					<FlatList
						data={data}
						renderItem={renderItem}
						keyExtractor={(item) => item.id.toString()}
						contentContainerStyle={styles.goalList}
					/>
					<View style={styles.buttonContainer}>
						<Button
							title={"+ New"}
							buttonWidth={170}
							borderWidth={0}
							fontSize={20}
							lineHeight={24}
							type={"primary"}
							onPress={() => navigation.navigate("AddOrEditNote")}
						/>
					</View>
				</View>
			</View>
		</Layout>
	);
}

export default NotesScreen;
