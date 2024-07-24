import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { Colors } from "../../constants";
import { Icon } from "../Icon";
import { styles } from "./styles";

function CalendarComponent(props) {
	const { period, changePeriod } = props;

	// useState
	const [calendarActive, setCalendarActive] = useState(null);
	const [markedDates, setMarkedDates] = useState(null);

	// useEffect
	useEffect(() => {
		fillMarkedDates(period);
	}, [period]);

    // functions
	const onDayPress = (day) => {
		if (period.startDate === null || period.endDate !== null) {
			period.startDate = day.dateString;
			period.endDate = null;
		} else if (period.endDate === null) {
			period.endDate = day.dateString;
		}

		if (period.startDate > period.endDate) {
			let date = period.startDate;
			period.startDate = period.endDate;
			period.endDate = date;
		}

		fillMarkedDates(period);

		changePeriod(period);
	};

	const fillMarkedDates = (period) => {
		const markedDates = {};

		if (period.startDate) {
			markedDates[period.startDate] = {
				color: "#50cebb",
				textColor: "white",
				startingDay: true,
				endingDay: true,
			};

			if (period.endDate) {
				const daylist = getDaysArray(
					new Date(period.startDate),
					new Date(period.endDate)
				);
				daylist.map((v) => {
					const date = v.toISOString().slice(0, 10);
					markedDates[date] = {
						color: "#70d7c7",
						textColor: "white",
					};
				});
				markedDates[period.startDate] = {
					color: "#50cebb",
					textColor: "white",
					startingDay: true,
				};
				markedDates[period.endDate] = {
					color: "#50cebb",
					textColor: "white",
					endingDay: true,
				};
			}
		}

		setMarkedDates(markedDates);
	};

	const getDaysArray = (start, end) => {
		let arr = [];
		for (
			let dt = new Date(start);
			dt <= new Date(end);
			dt.setDate(dt.getDate() + 1)
		) {
			arr.push(new Date(dt));
		}

		return arr;
	};

	const onCalendarToggle = () => {
		setCalendarActive((prev) => !prev);
	};

	return (
		<View style={styles.calendarSection}>
			<Pressable
				onPress={onCalendarToggle}
				style={styles.calendarLabel}>
				<View style={styles.calendarBlock}>
					<Text style={styles.date}>
						<Text style={{ fontWeight: 500 }}>start:</Text>{" "}
						{period.startDate || "-"}
					</Text>
					<View style={styles.calendarIcon}>
						<Icon
							name="time"
							style={{ height: 20 }}
							color={Colors.ui_purple}
						/>
					</View>
					<Text style={{ ...styles.date, marginLeft: 10 }}>
						<Text style={{ fontWeight: 500 }}>end:</Text>{" "}
						{period.endDate || "-"}
					</Text>
				</View>
			</Pressable>
			{calendarActive && (
				<Calendar
					markingType={"period"}
					markedDates={markedDates}
					onDayPress={onDayPress}
				/>
			)}
		</View>
	);
}

export default CalendarComponent;
