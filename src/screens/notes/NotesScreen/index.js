import React, { useState } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useNotes } from "../../../state/hooks/query/notes/useNotes";
import { useDeleteNote } from "../../../state/hooks/mutations/notes/deleteNote";
import { useLogoutUser } from "../../../state/hooks/mutations/user/logoutUser";
import { Button } from "../../../components/Buttons";
import { styles } from "./styles";
import Background from "../../../components/Background";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";
import Toast from "react-native-toast-message";
import Dialog from "react-native-dialog";

function NotesScreen() {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false);

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

	const changeDialogVisibility = () => {
		setVisibleDeleteDialog(!visibleDeleteDialog);
	};

	const mutateDeleteNote = useDeleteNote({
		onSuccess: () => {
			setVisibleDeleteDialog(false);
			Toast.show({
				type: "success",
				text1: "Successfully deleted",
			});
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
			});
		},
	});

	const handleDeleteNote = (id) => {
		mutateDeleteNote.mutate(id);
	};

	const renderItem = ({ item }) => {
		return (
			<>
				<TouchableOpacity
					key={item.id}
					onPress={() => handleNavigateEditScreen(item.id)}>
					<View
						style={styles.noteBlock}
						key={item.id}>
						<Text style={styles.noteTitle}>{item.title}</Text>
						<TouchableOpacity onPress={changeDialogVisibility}>
							<Image
								style={styles.taskContentIcon}
								resizeMode="contain"
								source={require("../../../assets/icon/bin.png")}
							/>
						</TouchableOpacity>
					</View>
					<View>
						<Dialog.Container visible={visibleDeleteDialog}>
							<Dialog.Title>Are you sure?</Dialog.Title>
							<Dialog.Description>
								Do you want to delete this task? You cannot undo
								this action.
							</Dialog.Description>
							<Dialog.Button
								onPress={changeDialogVisibility}
								label="Cancel"
							/>
							<Dialog.Button
								onPress={() => handleDeleteNote(item.id)}
								label="Delete"
							/>
						</Dialog.Container>
					</View>
				</TouchableOpacity>
			</>
		);
	};

	const logout = () => {
		mutateLogoutUser.mutate();
	};

	const mutateLogoutUser = useLogoutUser({
		onSuccess: () => {
			navigation.navigate("Login");
			console.log("User logged out successfully");
		},
		onError: (error) => {
			Toast.show({
				type: "error",
				text1: error.response.data.message,
			});
		},
	});

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Spinner visible={isLoading || isFetching || isLoadingUser} />
				<View style={styles.notes}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							hello, {userData?.first_name}
						</Text>
					</View>
					<FlatList
						data={data}
						renderItem={renderItem}
						keyExtractor={(item) => item.id.toString()}
						contentContainerStyle={styles.noteList}
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
				<Button
					title="log out"
					buttonWidth={200}
					borderWidth={0}
					fontSize={20}
					lineHeight={24}
					marginTop={20}
					type="primary"
					onPress={logout}
				/>
			</View>
		</Layout>
	);
}

export default NotesScreen;
