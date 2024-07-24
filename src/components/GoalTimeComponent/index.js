import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Colors, periods, weekItems } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import DatePicker from "react-native-date-picker";
import SelectItem from "../SelectItem";
import globalStyles from "../../assets/globalStyles";

function GoalTimeComponent(props) {
	const {
		weekdays,
		interval,
		reminder,
		startTime,
		endTime,
		onPressWeekItem,
		onPressPeriodItem,
		onPressReminder,
		onChangeStartTime,
		onChangeEndTime,
	} = props;

	const currentDate = new Date();

	// useState
	const [date, setDate] = useState(() => {
		currentDate.setHours(0);
		currentDate.setMinutes(0);
		currentDate.setSeconds(0);
		return currentDate;
	});
	const [openStart, setOpenStart] = useState(false);
	const [openEnd, setOpenEnd] = useState(false);
	const [timeActive, setTimeActive] = useState(false);

	// functions
	const onTimeToggle = () => {
		setTimeActive((prev) => !prev);
	};

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
				onPress={onTimeToggle}
				style={styles.timeLabel}>
				<View style={styles.time}>
					<Icon
						name="alarm"
						type="material"
						size={23}
						color={Colors.ui_purple}
					/>
					<Text style={styles.timeText}>{startTime}</Text>
				</View>
				<Icon
					name="keyboard-arrow-down"
					type="material"
					size={25}
					color={Colors.ui_purple}
				/>
			</TouchableOpacity>

			{timeActive && (
				<View style={styles.timeContent}>
					<TouchableOpacity onPress={() => setOpenStart(true)}>
						<View
							style={[globalStyles.row, globalStyles.jc_between]}>
							<Text style={styles.labelTime}>Start Time</Text>
							<Text>{startTime}</Text>
						</View>
					</TouchableOpacity>
					<DatePicker
						modal
						mode="time"
						open={openStart}
						date={date}
						onConfirm={(date) => {
							setOpenStart(false);
							setDate(date);
							const selectedTime = formatTime(date);
							onChangeStartTime(selectedTime);
						}}
						onCancel={() => {
							setOpenStart(false);
						}}
						format="HH:mm"
					/>

					<TouchableOpacity onPress={() => setOpenEnd(true)}>
						<View
							style={[globalStyles.row, globalStyles.jc_between]}>
							<Text style={styles.labelTime}>End Time</Text>
							<Text>{endTime}</Text>
						</View>
					</TouchableOpacity>
					<DatePicker
						modal
						mode="time"
						open={openEnd}
						date={date}
						onConfirm={(date) => {
							setOpenEnd(false);
							setDate(date);
							const selectedTime = formatTime(date);
							onChangeEndTime(selectedTime);
						}}
						onCancel={() => {
							setOpenEnd(false);
						}}
						format="HH:mm"
					/>
					<SelectItem
						items={weekItems}
						activeItems={weekdays}
						onPress={onPressWeekItem}
						title="Repeat every"
						textSize={13}
						color="#92B3C2"
						activeColor={Colors.ui_purple}
						containerStyle={{}}
						itemStyle={{}}
						multiple
					/>

					<SelectItem
						items={periods}
						activeItem={interval}
						onPress={onPressPeriodItem}
						title="Repeat every"
						textSize={13}
						color="#92B3C2"
						activeColor={Colors.ui_purple}
						containerStyle={{ justifyContent: "flex-start" }}
						itemStyle={{}}
					/>

					<View
						style={[
							globalStyles.row,
							globalStyles.jc_between,
							globalStyles.pv_10,
						]}>
						<Text style={styles.label}>Reminder</Text>

						<TouchableOpacity onPress={onPressReminder}>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									style={{
										width: 24,
										height: 24,
									}}
									resizeMode="contain"
									source={require("../../assets/icon/off-notification.png")}
								/>
								<Text style={styles.taskContentText}>
									{reminder ? "on" : "off"}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}

export default GoalTimeComponent;
