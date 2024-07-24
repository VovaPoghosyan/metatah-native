import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../../constants";
import { styles } from "./styles";
import CalendarComponent from "../../../components/CalendarComponent";
import globalStyles from "../../../assets/globalStyles";
import Background from "../../../components/Background";
import FooterMenu from "../../../components/FooterMenu";

const ChallengeScreenTwo = () => {
	// useState
	const [period, setPeriod] = useState({
		startDate: null,
		endDate: null,
	});

	const [dates, setDates] = useState([
		{
			id: 1,
			day: "day 1",
			isChecked: false,
		},
		{
			id: 2,
			day: "day 2",
			isChecked: false,
		},
		{
			id: 3,
			day: "day 3",
			isChecked: false,
		},
		{
			id: 4,
			day: "day 4",
			isChecked: false,
		},
		{
			id: 5,
			day: "day 5",
			isChecked: false,
		},
		{
			id: 6,
			day: "day 6",
			isChecked: false,
		},
		{
			id: 7,
			day: "day 7",
			isChecked: false,
		},
	]);
	const [thoughts, setThoughts] = useState([
		{
			id: 1,
			isChecked: false,
			title: "it was helpful",
		},
		{
			id: 2,
			isChecked: false,
			title: "it was useless",
		},
		{
			id: 3,
			isChecked: false,
			title: "I loved it",
		},
		{
			id: 4,
			isChecked: false,
			title: "more like this",
		},
	]);

	// useNavigation
	const navigation = useNavigation();

	// functions
	onChangePeriod = (period) => {
		setPeriod(period);
	};

	handleChangeIsChecked = (isChecked, key) => {
		const datesNew = dates.map((date) => {
			if (date.id === key) {
				date.isChecked = isChecked;
			}
			return date;
		});

		setDates(datesNew);
	};

	handleChangeThoughtIsChecked = (isChecked, key) => {
		const thoughtsNew = thoughts.map((thought) => {
			if (thought.id === key) {
				thought.isChecked = isChecked;
			}
			return thought;
		});

		setThoughts(thoughtsNew);
	};

	return (
		<View style={styles.container}>
			<Background imageName="mr-bg" />
			<View style={styles.containerBlock}>
				<Text style={styles.title}>challenge of the week</Text>
				<Text style={styles.challengeTitle}>save electricity</Text>
				<View>
					<Text style={styles.notes}>
						Increased efficiency can lower greenhouse gas (GHG)
						emissions and other pollutants, as well as decrease
						water use
					</Text>
				</View>
				<Text style={{ ...styles.blockTitle, marginTop: 20 }}>
					dates
				</Text>
				<ScrollView style={styles.scrollView}>
					<CalendarComponent
						period={period}
						changePeriod={this.onChangePeriod}
					/>
					<View style={styles.dates}>
						{dates.map((date) => (
							<View
								key={date.id}
								style={styles.dayBlock}>
								<Text>{date.day}</Text>
								<CheckBox
									checked={date.isChecked}
									onPress={() =>
										handleChangeIsChecked(
											!date.isChecked,
											date.id
										)
									}
									checkedColor={Colors.ui_purple}
								/>
							</View>
						))}
					</View>
					<View>
						<Text style={styles.thoughtsTitle}>
							your thoughts about this challenge
						</Text>
						{thoughts.map((thought) => (
							<TouchableOpacity
								key={thought.id}
								onPress={() =>
									handleChangeThoughtIsChecked(
										!thought.isChecked,
										thought.id
									)
								}>
								<View
									style={[
										styles.thoughtBlock,
										thought.isChecked
											? styles.isChecked
											: styles.isNotChecked,
									]}>
									<Text
										style={[
											styles.thoughtBlockTitle,
											thought.isChecked &&
												styles.isCheckedTitle,
										]}>
										{thought.title}
									</Text>
								</View>
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>
				<TouchableOpacity
					style={styles.next}
					onPress={() => navigation.navigate("ChallengeThree")}>
					<Text style={globalStyles.text}>next</Text>
				</TouchableOpacity>
			</View>
			<FooterMenu />
		</View>
	);
};

export default ChallengeScreenTwo;
