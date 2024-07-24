import React from "react";
import { Text, View, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Button } from "../../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useNotes } from "../../../state/hooks/query/notes/useNotes";
import FooterMenu from "../../../components/FooterMenu";
import Background from "../../../components/Background";
import Spinner from "react-native-loading-spinner-overlay";

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

	return (
		<View style={styles.container}>
			<Background imageName="mr-bg" />
			<Spinner visible={isLoading || isFetching || isLoadingUser} />
			<View style={styles.goals}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						hello, {userData?.first_name}
					</Text>
				</View>
				<ScrollView contentContainerStyle={styles.goalList}>
					{data?.map((el) => {
						return (
							<TouchableOpacity
								onPress={() => handleNavigateEditScreen(el.id)}>
								<View
									style={styles.goalBlock}
									key={el.id}>
									<Text style={styles.goalTitle}>
										{el.title}
									</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
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
			<FooterMenu />
		</View>
	);
}

export default NotesScreen;
