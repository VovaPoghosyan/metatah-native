import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { CheckBox, Image } from "react-native-elements";
import { styles } from "./styles";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const HabitsScreen = () => {
	// useState
	const [checkboxes, setCheckboxes] = useState([
		{
			id: 1,
			label: "listen to music",
			imageSource: require("../../../../assets/icon/music.png"),
			isChecked: false,
		},
		{
			id: 2,
			label: "write down a to-do list or journal",
			imageSource: require("../../../../assets/icon/write.png"),
			isChecked: false,
		},
		{
			id: 3,
			label: "read a good book",
			imageSource: require("../../../../assets/icon/read.png"),
			isChecked: false,
		},
		{
			id: 4,
			label: "have a light snack or a tea",
			imageSource: require("../../../../assets/icon/snack.png"),
			isChecked: false,
		},
		{
			id: 5,
			label: "warm bath",
			imageSource: require("../../../../assets/icon/bath.png"),
			isChecked: false,
		},
		{
			id: 6,
			label: "stretch, breath and relax",
			imageSource: require("../../../../assets/icon/stretch.png"),
			isChecked: false,
		},
		{
			id: 7,
			label: "say positive affirmation",
			imageSource: require("../../../../assets/icon/positive.png"),
			isChecked: false,
		},
		{
			id: 8,
			label: "meditation",
			imageSource: require("../../../../assets/icon/meditate.png"),
			isChecked: false,
		},
		{
			id: 9,
			label: "leave electronics away",
			imageSource: require("../../../../assets/icon/no-electronics.png"),
			isChecked: false,
		},
	]);

	// useNavigation
	const navigation = useNavigation();

	// functions
	const toggleCheckbox = (id) => {
		const updatedCheckboxes = checkboxes.map((checkbox) =>
			checkbox.id === id
				? { ...checkbox, isChecked: !checkbox.isChecked }
				: checkbox
		);
		setCheckboxes(updatedCheckboxes);
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Title
					subtitle={
						"habits that you can adopt \nto end your day that will set you up"
					}
					title="for a better tomorrow"
				/>
				<ScrollView
					contentContainerStyle={{
						marginTop: 12,
						paddingBottom: 12,
					}}>
					{checkboxes.map((checkbox) => (
						<CheckBox
							size={32}
							checkedColor={Colors.ui_purple}
							uncheckedColor={Colors.ui_purple}
							containerStyle={styles.checkboxItem}
							key={checkbox.id}
							title={
								<View style={styles.checkboxLabel}>
									<Image
										source={checkbox.imageSource}
										style={styles.checkboxImage}
									/>
									<Text style={styles.labelText}>
										{checkbox.label}
									</Text>
								</View>
							}
							checked={checkbox.isChecked}
							onPress={() => toggleCheckbox(checkbox.id)}
						/>
					))}
				</ScrollView>
				<Next
					title="next >"
					onPress={() =>
						navigation.navigate("EveningRoutineBiggestLesson")
					}
				/>
			</View>
		</View>
	);
};

export default HabitsScreen;
