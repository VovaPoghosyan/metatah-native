import React, { memo, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useUser } from "../../../state/hooks/query/user/useUser";
import { useTodo } from "../../../state/hooks/query/todos/useTodo";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useCreateTodo } from "../../../state/hooks/mutations/todos/createTodo";
import { useEditTodo } from "../../../state/hooks/mutations/todos/editTodo";
import { Icon } from "react-native-elements";
import { Colors } from "../../../constants";
import { styles } from "./styles";
import Notes from "../../../components/Notes";
import TimeComponent from "../../../components/TimeComponent";
import SelectPriority from "../../../components/SelectPriority";
import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";
import CalendarComponent from "../../../components/CalendarComponent";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";

function AddOrEditTodoScreen() {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [data, setData] = useState({
		title: "",
		note: "",
		priority: "",
		period: {
			startDate: null,
			endDate: null,
		},
		startTime: "00:00",
		endTime: "00:00",
		reminder: "00:00",
	});

	// useRoute
	const route = useRoute();
	const id = route.params?.id;

	// useQuery
	const { data: userData, isLoading: isLoadingUser } = useUser();
	const todoData = id ? useTodo({ id }) : { data: null };

	// functions
	const onChangeData = (value, key) => {
		const newData = { ...data };
		newData[key] = value;
		setData(newData);
	};

	const handleCreateTodo = () => {
		mutateCreateTodo.mutate(data);
	};

	const handleEditTodo = () => {
		mutateEditTodo.mutate({ id, todoData: data });
	};

	// useEffect
	useEffect(() => {
		if (!todoData.data) {
			return;
		}

		setData({ ...todoData.data });
	}, [todoData.data]);

	// useMutation
	const mutateCreateTodo = useCreateTodo({
		onSuccess: (data) => {
			navigation.navigate("Todo");
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

	const mutateEditTodo = useEditTodo({
		onSuccess: (data) => {
			navigation.navigate("Todo");
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
						todoData.isLoading ||
						isLoadingUser ||
						mutateCreateTodo.isPending ||
						mutateEditTodo.isPending
					}
				/>
				<>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							hello, {userData?.first_name}
						</Text>
					</View>
					<ScrollView contentContainerStyle={styles.toDoSection}>
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

						<View style={styles.periodDate}>
							<CalendarComponent
								period={data.period}
								changePeriod={(value) =>
									onChangeData(value, "period")
								}
							/>
						</View>
						<View style={styles.periodTime}>
							<View style={styles.timeBlock}>
								<Text style={styles.label}>Start time:</Text>
								<TimeComponent
									time={data.startTime}
									setTime={(value) =>
										onChangeData(value, "startTime")
									}
								/>
							</View>
							<View style={styles.timeBlock}>
								<Text style={styles.label}>End time:</Text>
								<TimeComponent
									time={data.endTime}
									setTime={(value) =>
										onChangeData(value, "endTime")
									}
								/>
							</View>
						</View>

						<View style={globalStyles.mt_10}>
							<Text style={styles.label}>Reminder:</Text>
							<TimeComponent
								time={data.reminder}
								setTime={(value) =>
									onChangeData(value, "reminder")
								}
								reminderIcon={
									<Icon
										solid
										name="notifications-none"
										type="material"
										color={Colors.ui_dark_purple}
									/>
								}
							/>
						</View>

						<SelectPriority
							activeItem={data.priority}
							onChange={(value) =>
								onChangeData(value, "priority")
							}
						/>

						<View style={styles.footer}>
							{id ? (
								<TouchableOpacity onPress={handleEditTodo}>
									<Text style={styles.addText}>edit</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity onPress={handleCreateTodo}>
									<Text style={styles.addText}>add</Text>
								</TouchableOpacity>
							)}
							<TouchableOpacity
								onPress={() => navigation.navigate("Todo")}>
								<Text style={styles.cancelText}>cancel</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</>
			</View>
		</Layout>
	);
}

export default memo(AddOrEditTodoScreen);
