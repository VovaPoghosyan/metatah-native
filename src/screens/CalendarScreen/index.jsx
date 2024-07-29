import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../constants";
import FooterMenu from "../../components/FooterMenu";
import Background from "../../components/Background";
import CollapsibleTask from "../../components/CollapsibleTask";
import TaskEmpty from "../../components/TaskEmpty";

const CalendarScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [items, setItems] = useState({});
	const [markedData, setMarkedData] = useState({});
	const [defaultDay, setDefaultDay] = useState("");

	// TODO: get from BE
	const data = {
		["2024-07-09"]: [
			{
				todos: [
					{
						title: "Monthly Meeting",
						priority: "medium",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
					{
						title: "Team Standup",
						priority: "medium",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
				],
				goals: [
					{
						title: "Monthly Meeting",
						priority: "medium",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
				],
			},
		],
		["2024-07-11"]: [
			{
				todos: [
					{
						title: "Monthly Meeting",
						priority: "high",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
					{
						title: "Team Standup",
						priority: "medium",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
				],
				goals: [
					{
						title: "Monthly Meeting",
						priority: "low",
						note: "some description",
						startTime: "09:00",
						endTime: "09:30",
						notify: true,
					},
				],
			},
		],
	};

	// functions
	const getDate = () => {
		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
		const day = String(today.getDate()).padStart(2, "0");

		const formattedDate = `${year}-${month}-${day}`;

		return formattedDate;
	};

	const handleDayPress = (day) => {
		setItems({ [day.dateString]: data[day.dateString] });
	};

	// useEffect
	useEffect(() => {
		const dayString = getDate();

		const newData = {};

		for (const date in data) {
			newData[date] = { marked: true };
		}

		setDefaultDay(getDate());
		setMarkedData(newData);
		setItems({ [dayString]: data[dayString] });
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<Background imageName="mr-bg" />
			<Agenda
				showClosingKnob
				selected={defaultDay}
				theme={{
					calendarBackground: Colors.ui_light_gray,
					agendaKnobColor: Colors.ui_light_green,
					monthTextColor: Colors.ui_purple,
					textSectionTitleColor: Colors.ui_dark_purple,
					selectedDayBackgroundColor: Colors.ui_light_green,
					dayTextColor: Colors.ui_black,
					dotColor: Colors.ui_darker_purple,
				}}
				onDayPress={(day) => handleDayPress(day)}
				items={items}
				renderItem={(item) => (
					<View style={styles.item}>
						<View style={styles.tasks}>
							<View style={styles.title}>
								<View style={styles.taskTitle}>
									<Text style={styles.taskTitleText}>
										todos
									</Text>
								</View>
								<TouchableOpacity
									style={styles.addNew}
									onPress={() =>
										navigation.navigate("AddOrEditTodo")
									}>
									<Text style={styles.addNewText}>new +</Text>
								</TouchableOpacity>
							</View>
							<View>
								{item.todos.map((todo, index) => (
									<CollapsibleTask
										key={index}
										taskData={{
											title: todo.title,
											priority: todo.priority,
											note: todo.note,
											startTime: todo.startTime,
											endTime: todo.endTime,
											notify: todo.notify,
										}}
									/>
								))}
							</View>
						</View>
						<View style={styles.goals}>
							<View style={styles.title}>
								<View style={styles.taskTitle}>
									<Text style={styles.taskTitleText}>
										goals
									</Text>
								</View>
								<TouchableOpacity
									style={styles.addNew}
									onPress={() =>
										navigation.navigate("AddOrEditGoal")
									}>
									<Text style={styles.addNewText}>new +</Text>
								</TouchableOpacity>
							</View>
							<View>
								{item.goals.map((goal, index) => (
									<CollapsibleTask
										key={index}
										taskData={{
											title: goal.title,
											priority: goal.priority,
											note: goal.note,
											startTime: goal.startTime,
											endTime: goal.endTime,
											notify: goal.notify,
										}}
									/>
								))}
							</View>
						</View>
					</View>
				)}
				markedDates={markedData}
				renderEmptyData={() => (
					<View
						style={{
							flex: 1,
							backgroundColor: "rgba(0, 0, 0, 0)",
						}}>
						<TaskEmpty title="task" />
					</View>
				)}
			/>
			<View style={{ padding: 10 }}>
				<FooterMenu />
			</View>
		</View>
	);
};

export default CalendarScreen;
