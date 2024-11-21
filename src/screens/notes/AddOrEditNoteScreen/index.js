import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useNote } from "../../../state/hooks/query/notes/useNote";
import { useCreateNote } from "../../../state/hooks/mutations/notes/createNote";
import { useEditNote } from "../../../state/hooks/mutations/notes/editNote";
import { Button } from "../../../components/Buttons";
import { styles } from "./styles";
import Notes from "../../../components/Notes";
import Background from "../../../components/Background";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";

function AddOrEditNoteScreen() {
	// useNavigation
	const navigation = useNavigation();

	// useRoute
	const route = useRoute();
	const id = route.params?.id;

	// useState
	const [data, setData] = useState({
		title: "",
		note: "",
	});

	// useQuery
	const { data: userData, isLoading: isLoadingUser } = useUser();
	const noteData = id ? useNote({ id }) : { data: null };

	// functions
	const onChangeData = (value, key) => {
		const newData = { ...data };
		newData[key] = value;
		setData(newData);
	};

	const handleCreateNote = () => {
		mutateCreateNote.mutate(data);
	};

	const handleEditNote = () => {
		mutateEditNote.mutate({ id, noteData: data });
	};

	// useEffect
	useEffect(() => {
		if (!noteData.data) {
			return;
		}

		setData({ ...noteData.data });
	}, [noteData.data]);

	// useMutation
	const mutateCreateNote = useCreateNote({
		onSuccess: (data) => {
			navigation.navigate("Notes");
			console.log(data);
		},
		onError: () => {
			showMessage({
				message: "Oops! Something went wrong.",
				type: "danger",
				floating: true,
			});
		},
	});

	const mutateEditNote = useEditNote({
		onSuccess: (data) => {
			navigation.navigate("Notes");
			console.log(data);
		},
		onError: () => {
			showMessage({
				message: "Oops! Something went wrong.",
				type: "danger",
				floating: true,
			});
		},
	});

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Spinner
					visible={
						noteData.isLoading ||
						isLoadingUser ||
						mutateCreateNote.isPending ||
						mutateEditNote.isPending
					}
				/>
				<View style={styles.goalSection}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							hello, {userData?.first_name}
						</Text>
					</View>
					<ScrollView
						contentContainerStyle={styles.goalSectionContainer}>
						<Notes
							titleValue={data.title}
							noteValue={data.note}
							onChangeTitle={(value) =>
								onChangeData(value, "title")
							}
							onChangeValue={(value) =>
								onChangeData(value, "note")
							}
						/>
					</ScrollView>
					<Button
						title={id ? "edit" : "create"}
						buttonWidth={100}
						borderWidth={0}
						fontSize={20}
						lineHeight={24}
						type="primary"
						onPress={id ? handleEditNote : handleCreateNote}
					/>
				</View>
			</View>
		</Layout>
	);
}

export default AddOrEditNoteScreen;
