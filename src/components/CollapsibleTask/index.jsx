import React, { useEffect, useRef, useState } from "react";
import {
	View,
	Text,
	Image,
	UIManager,
	LayoutAnimation,
	Platform,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDeleteTodo } from "../../state/hooks/mutations/todos/deleteTodo";
import { useDeleteGoal } from "../../state/hooks/mutations/goals/deleteGoal";
import { styles } from "./styles";
import Dialog from "react-native-dialog";
import Toast from "react-native-toast-message";

if (
	Platform.OS === "android" &&
	UIManager.setLayoutAnimationEnabledExperimental
) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}

const CollapsibleTask = ({ taskData, editScreen, taskType }) => {
	const { id, title, priority, note, startTime, endTime, notify } = taskData;

	// useNavigation
	const navigation = useNavigation();

	// useState
	const [expanded, setExpanded] = useState(false);
	const [visibleDeleteDialog, setVisibleDeleteDialog] = useState(false);
	const scrollViewRef = useRef(null);

	// useEffect
	useEffect(() => {
		if (scrollViewRef.current && expanded) {
			scrollViewRef.current.scrollTo({ y: 0, animated: true });
		}
	}, [expanded]);

	// functions
	const mutateDeleteTodo = useDeleteTodo({
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

	const mutateDeleteGoal = useDeleteGoal({
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

	const toggleExpand = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setExpanded(!expanded);
	};

	const getIcon = (name) => {
		switch (name) {
			case "low":
				return require("../../assets/icon/medium-priority.png");
			case "medium":
				return require("../../assets/icon/medium-priority.png");
			case "high":
				return require("../../assets/icon/high-priority.png");
			default:
				return require("../../assets/icon/medium-priority.png");
		}
	};

	const handleNavigateEditScreen = () => {
		if (!id) {
			return;
		}

		navigation.navigate(editScreen, { id });
	};

	const changeDialogVisibility = () => {
		setVisibleDeleteDialog(!visibleDeleteDialog);
	};

	const handleDeleteTask = () => {
		switch (taskType) {
			case "Todo":
				mutateDeleteTodo.mutate(taskData.id);
			case "Goal":
				mutateDeleteGoal.mutate(taskData.id);
		}
	};

	return (
		<TouchableOpacity onPress={toggleExpand}>
			<View style={styles.taskBlock}>
				<View style={styles.taskBlockTitleBlock}>
					<View style={styles.taskBlockTitle}>
						<Text style={styles.title}>{title}</Text>
						<Image
							style={{ width: 18, height: 18, marginLeft: 8 }}
							resizeMode="contain"
							source={getIcon(priority)}
						/>
					</View>
					<View style={styles.taskBlockTitle}>
						<TouchableOpacity onPress={handleNavigateEditScreen}>
							<Image
								style={{
									...styles.taskContentIcon,
									marginRight: 8,
								}}
								resizeMode="contain"
								source={require("../../assets/icon/edit.png")}
							/>
						</TouchableOpacity>
						<TouchableOpacity onPress={changeDialogVisibility}>
							<Image
								style={styles.taskContentIcon}
								resizeMode="contain"
								source={require("../../assets/icon/bin.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				{expanded && (
					<View style={{ overflow: "hidden" }}>
						<ScrollView
							ref={scrollViewRef}
							style={{ overflow: "hidden" }}
							contentContainerStyle={{ flexGrow: 1 }}>
							<View style={styles.taskContent}>
								<View style={styles.taskContentNote}>
									<Text
										numberOfLines={1}
										style={styles.taskContentText}>
										{note}
									</Text>
								</View>
								<View style={styles.taskContentDate}>
									<View style={{ flexDirection: "row" }}>
										<Image
											style={[
												styles.taskContentIcon,
												{ marginRight: 10 },
											]}
											resizeMode="contain"
											source={require("../../assets/icon/time.png")}
										/>
										<View>
											<Text style={styles.taskTime}>
												{startTime}
											</Text>
											<Text style={styles.taskTime}>
												{endTime}
											</Text>
										</View>
									</View>
									<View style={{ flexDirection: "row" }}>
										<Image
											style={{ width: 24, height: 24 }}
											resizeMode="contain"
											source={require("../../assets/icon/off-notification.png")}
										/>
										<Text style={styles.taskContentText}>
											{notify ? "on" : "off"}
										</Text>
									</View>
								</View>
							</View>
						</ScrollView>
					</View>
				)}
			</View>
			<View>
				<Dialog.Container visible={visibleDeleteDialog}>
					<Dialog.Title>Are you sure?</Dialog.Title>
					<Dialog.Description>
						Do you want to delete this task? You cannot undo this
						action.
					</Dialog.Description>
					<Dialog.Button
						onPress={changeDialogVisibility}
						label="Cancel"
					/>
					<Dialog.Button
						onPress={handleDeleteTask}
						label="Delete"
					/>
				</Dialog.Container>
			</View>
		</TouchableOpacity>
	);
};

export default CollapsibleTask;
