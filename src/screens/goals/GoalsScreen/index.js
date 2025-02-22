import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";
import { useGoals } from "../../../state/hooks/query/goals/useGoals";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants";
import { styles } from "./styles";
import Background from "../../../components/Background";
import CollapsibleTask from "../../../components/CollapsibleTask";
import TaskEmpty from "../../../components/TaskEmpty";
import Layout from "../../../layouts/Layout";
import Loading from "../../../components/Loading";

const GoalsScreen = () => {
	// useState
	const [items, setItems] = useState(null);
	const [markedData, setMarkedData] = useState({});
	const [defaultDay, setDefaultDay] = useState("");
	const [convertedData, setConvertedData] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);

	// useNavigation
	const navigation = useNavigation();

	// useQuery
	const { data, isLoading, isFetching, isRefetching } = useGoals();

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

	// functions
	const formatDate = (date) => {
		return date.toISOString().split("T")[0];
	};

	const getDate = () => {
		if (selectedDay) return selectedDay;

		const today = new Date();
		const year = today.getFullYear();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");

		const formattedDate = `${year}-${month}-${day}`;

		return formattedDate;
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

	const handleDayPress = (day) => {
		setSelectedDay(day.dateString);
		setItems({
			[day.dateString]: convertedData[day.dateString]
				? [convertedData[day.dateString]]
				: null,
		});
	};

	const hasData = () => {
		return (
			items &&
			Object.keys(items).some(
				(date) => Array.isArray(items[date]) && items[date].length > 0
			)
		);
	};

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={{ flex: 1 }}>
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
							{item?.map((goal, index) => {
								return (
									<CollapsibleTask
										key={index}
										taskData={{
											id: goal.id,
											title: goal.title,
											priority: goal.priority,
											note: goal.note,
											startTime: goal.startTime,
											endTime: goal.endTime,
											notify: goal.notify,
										}}
										editScreen="AddOrEditGoal"
										taskType="Goal"
									/>
								);
							})}
						</View>
					)}
					markedDates={markedData}
					renderEmptyData={() => (
						<View
							style={{
								flex: 1,
								backgroundColor: "rgba(0, 0, 0, 0)",
							}}>
							<TaskEmpty title="goal" />
						</View>
					)}
				/>
				{hasData() && (
					<TouchableOpacity
						style={styles.createBlock}
						onPress={() => navigation.navigate("AddOrEditGoal")}>
						<Text style={styles.textCreate}>create +</Text>
					</TouchableOpacity>
				)}
			</View>
		</Layout>
	);
};

export default GoalsScreen;
