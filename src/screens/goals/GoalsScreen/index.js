import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Agenda } from "react-native-calendars";
import { useGoals } from "../../../state/hooks/query/goals/useGoals";
import { styles } from "./styles";
import { Colors } from "../../../constants";
import Background from "../../../components/Background";
import CollapsibleTask from "../../../components/CollapsibleTask";
import TaskEmpty from "../../../components/TaskEmpty";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../../layouts/Layout";

const GoalsScreen = () => {
	// useState
	const [items, setItems] = useState(null);
	const [markedData, setMarkedData] = useState({});
	const [defaultDay, setDefaultDay] = useState("");
	const [convertedData, setConvertedData] = useState(null);

	// useQuery
	const { data, isLoading, isFetching } = useGoals();

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
		setItems({
			[day.dateString]: convertedData[day.dateString]
				? [convertedData[day.dateString]]
				: null,
		});
	};

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={{ flex: 1 }}>
				<Spinner visible={isLoading || isFetching} />
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
			</View>
		</Layout>
	);
};

export default GoalsScreen;
