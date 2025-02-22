import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { useTodos } from "../../../state/hooks/query/todos/useTodos";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants";
import { styles } from "./styles";
import Background from "../../../components/Background";
import CollapsibleTask from "../../../components/CollapsibleTask";
import TaskEmpty from "../../../components/TaskEmpty";
import Layout from "../../../layouts/Layout";
import Loading from "../../../components/Loading";

const TodoScreen = () => {
	// useState
	const [items, setItems] = useState(null);
	const [markedData, setMarkedData] = useState({});
	const [defaultDay, setDefaultDay] = useState("");
	const [convertedData, setConvertedData] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);

	// useNavigation
	const navigation = useNavigation();

	// useQuery
	const { data, isLoading, isFetching, isRefetching } = useTodos();

	// functions
	const getDate = () => {
		if (selectedDay) return selectedDay;

		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");

		const formattedDate = `${year}-${month}-${day}`;

		return formattedDate;
	};

	const handleDayPress = (day) => {
		setSelectedDay(day.dateString);
		setItems({
			[day.dateString]: convertedData[day.dateString]
				? [convertedData[day.dateString]]
				: null,
		});
	};

	const formatDate = (date) => {
		return date.toISOString().split("T")[0];
	};

	const generateDataStructure = (data) => {
		const result = {};

		data.forEach((item) => {
			const startDate = new Date(item.period.startDate);
			const endDate = new Date(item.period.endDate);

			for (
				let date = new Date(startDate);
				date <= endDate;
				date.setDate(date.getDate() + 1)
			) {
				const formattedDate = formatDate(date);
				if (!result[formattedDate]) {
					result[formattedDate] = [];
				}
				result[formattedDate].push(item);
			}
		});

		return result;
	};

	const hasData = () => {
		return (
			items &&
			Object.keys(items).some(
				(date) => Array.isArray(items[date]) && items[date].length > 0
			)
		);
	};

	// useEffect
	useEffect(() => {
		if (!data) {
			return;
		}
		const newData = generateDataStructure(data);
		setConvertedData(newData);
	}, [data]);

	useEffect(() => {
		if (!convertedData) {
			return;
		}

		const dayString = getDate();

		const newData = {};

		for (const date in convertedData) {
			newData[date] = { marked: true };
		}

		setDefaultDay(dayString);
		setMarkedData(newData);
		setItems({
			[dayString]: convertedData[dayString]
				? [convertedData[dayString]]
				: null,
		});
	}, [convertedData]);

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={{ flex: 1, position: "relative" }}>
				{(isLoading || isFetching || isRefetching) && <Loading />}
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
							{item?.map((todo, index) => {
								return (
									<CollapsibleTask
										key={index}
										taskData={{
											id: todo.id,
											title: todo.title,
											priority: todo.priority,
											note: todo.note,
											startTime: todo.startTime,
											endTime: todo.endTime,
											notify: todo.notify,
										}}
										editScreen="AddOrEditTodo"
										taskType="Todo"
									/>
								);
							})}
						</View>
					)}
					markedDates={markedData}
					renderEmptyData={() => (
						<View style={styles.emptyContainer}>
							<TaskEmpty title="to-do" />
						</View>
					)}
				/>
				{hasData() && (
					<TouchableOpacity
						style={styles.createBlock}
						onPress={() => navigation.navigate("AddOrEditTodo")}>
						<Text style={styles.textCreate}>create +</Text>
					</TouchableOpacity>
				)}
			</View>
		</Layout>
	);
};

export default TodoScreen;
