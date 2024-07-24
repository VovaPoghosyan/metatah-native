import React, { useState } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { styles } from "./styles";
import DatePicker from "react-native-date-picker";

function TimeComponent({ time, setTime, reminderIcon }) {
	const currentDate = new Date();

	const [date, setDate] = useState(() => {
		currentDate.setHours(0);
		currentDate.setMinutes(0);
		currentDate.setSeconds(0);
		return currentDate;
	});
	const [open, setOpen] = useState(false);

	const formatTime = (selectedDate) => {
		const hours = selectedDate.getHours();
		const minutes = selectedDate.getMinutes();

		const formattedTime = `${String(hours).padStart(2, "0")}:${String(
			minutes
		).padStart(2, "0")}`;

		return formattedTime;
	};

	return (
		<View style={styles.timeSection}>
			<TouchableOpacity
				onPress={() => setOpen(true)}
				style={styles.timeLabel}>
				<View style={styles.time}>
					{reminderIcon || (
						<Icon
							name="alarm"
							type="material"
							size={23}
							color={Colors.ui_purple}
						/>
					)}
					<Text style={styles.timeText}>{time}</Text>
				</View>
				<Icon
					name="keyboard-arrow-down"
					type="material"
					size={25}
					color={Colors.ui_purple}
				/>
			</TouchableOpacity>
			<DatePicker
				modal
				mode="time"
				open={open}
				date={date}
				onConfirm={(date) => {
					setOpen(false);
					setDate(date);
					const selectedTime = formatTime(date);
					setTime(selectedTime);
					console.log(time);
				}}
				onCancel={() => {
					setOpen(false);
				}}
				format="HH:mm"
			/>
		</View>
	);
}

export default TimeComponent;
