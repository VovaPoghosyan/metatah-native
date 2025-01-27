import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { useTodos } from "../../state/hooks/query/todos/useTodos";
import { useGoals } from "../../state/hooks/query/goals/useGoals";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../constants";
import { styles } from "./styles";
import Background from "../../components/Background";
import CollapsibleTask from "../../components/CollapsibleTask";
import TaskEmpty from "../../components/TaskEmpty";
import Layout from "../../layouts/Layout";

const CalendarScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [items, setItems] = useState({});
	const [markedData, setMarkedData] = useState({});
	const [defaultDay, setDefaultDay] = useState("");

	// useQuery
	const { data: todosData, isLoading: todosLoading } = useTodos();
	const { data: goalsData, isLoading: goalsLoading } = useGoals();

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

	const formatDate = (date) => {
		return date.toISOString().split("T")[0];
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

	const generateDataStructure = (todos, goals) => {
		const result = {};

		const processItems = (items, type) => {
			items.forEach((item) => {
				const startDate = new Date(item.period.startDate);
				const endDate = new Date(item.period.endDate);

				for (
					let date = new Date(startDate);
					date <= endDate;
					date.setDate(date.getDate() + 1)
				) {
					const formattedDate = formatDate(date);

					if (!result[formattedDate]) {
						result[formattedDate] = [{ todos: [], goals: [] }];
					}

					result[formattedDate][0][type].push({
						title: item.title,
						priority: item.priority,
						note: item.note,
						startTime: item.startTime,
						endTime: item.endTime,
						notify: item.notify,
					});
				}
			});
		};

		processItems(todos, "todos");
		processItems(goals, "goals");

		return result;
	};

	const data = generateDataStructure(todosData || [], goalsData || []);

	useEffect(() => {
		if (!todosLoading && !goalsLoading && todosData && goalsData) {
			const structuredData = generateDataStructure(todosData, goalsData);
			setMarkedData(
				Object.keys(structuredData).reduce((acc, date) => {
					acc[date] = { marked: true };
					return acc;
				}, {})
			);
			setItems({ [getDate()]: structuredData[getDate()] });
		}
	}, [todosLoading, goalsLoading, todosData, goalsData]);


	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={{ flex: 1 }}>
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
							{item.todos.length > 0 && (
								<View>
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
											<Text style={styles.addNewText}>
												new +
											</Text>
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
							)}
							{item.goals.length > 0 && (
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
											<Text style={styles.addNewText}>
												new +
											</Text>
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
							)}
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
			</View>
		</Layout>
	);
};

export default CalendarScreen;
