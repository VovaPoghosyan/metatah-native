import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants";
import { styles } from "./styles";
import CalendarComponent from "../../../components/CalendarComponent";
import globalStyles from "../../../assets/globalStyles";
import Background from "../../../components/Background";
import { TextInput } from "react-native";

function ChallengeScreenOne() {
	// useState
	const [title, setTitle] = useState("");
	const [notesText, setNotesText] = useState("");
	const [period, setPeriod] = useState({
		startDate: null,
		endDate: null,
	});

	// useNavigation
	const navigation = useNavigation();

	// functions
	const handleChangeTitle = (value) => {
		setTitle(value);
	};

	const handleChangeNotesText = (value) => {
		setNotesText(value);
	};

	const onChangePeriod = (period) => {
		setPeriod(period);
	};

	// const handleChangeIsChecked = (isChecked, key) => {
	// 	const datesNew = dates.map((date) => {
	// 		if (date.id === key) {
	// 			date.isChecked = isChecked;
	// 		}
	// 		return date;
	// 	});

	// 	setDates(datesNew);
	// };

	// const handleChangeThoughtIsChecked = (isChecked, key) => {
	// 	const thoughtsNew = thoughts.map((thought) => {
	// 		if (thought.id === key) {
	// 			thought.isChecked = isChecked;
	// 		}
	// 		return thought;
	// 	});

	// 	setThoughts(thoughtsNew);
	// };

	return (
		<View style={styles.container}>
			<Background imageName="mr-bg" />
			<View style={styles.containerBlock}>
				<Input
					value={title}
					onChangeText={(value) => handleChangeTitle(value)}
					style={styles.title}
					placeholder="add title…"
					inputContainerStyle={{
						borderBottomColor: Colors.ui_white,
						marginLeft: -10,
					}}
					placeholderTextColor={Colors.ui_white}
				/>
				<View style={styles.notes}>
					<Text style={styles.blockTitle}>notes</Text>
					<TextInput
						style={styles.notesTextInput}
						value={notesText}
						onChange={(value) => handleChangeNotesText(value)}
						placeholder="text"
						multiline
						placeholderTextColor={Colors.ui_purple}
					/>
				</View>
				<Text style={{ ...styles.blockTitle, marginTop: 20 }}>
					dates
				</Text>
				<ScrollView style={styles.scrollView}>
					<CalendarComponent
						period={period}
						changePeriod={onChangePeriod}
					/>
				</ScrollView>
				<TouchableOpacity
					style={styles.next}
					onPress={() => navigation.navigate("ChallengeTwo")}>
					<Text style={globalStyles.text}>next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ChallengeScreenOne;
