import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { CheckBox } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const ListScreen = () => {
	// useState
	const [checkboxes, setCheckboxes] = useState([
		{
			id: 1,
			label: "wake up early",
			imageSource: require("../../../../assets/icon/sun.png"),
			isChecked: false,
		},
		{
			id: 2,
			label: "drink glass of water",
			imageSource: require("../../../../assets/icon/glass.png"),
			isChecked: false,
		},
		{
			id: 3,
			label: "enjoy a cup of coffee or tea",
			imageSource: require("../../../../assets/icon/cup.png"),
			isChecked: false,
		},
		{
			id: 4,
			label: "prepare a healthy breakfast",
			imageSource: require("../../../../assets/icon/breakfast.png"),
			isChecked: false,
		},
		{
			id: 5,
			label: "take advantage of self-care",
			imageSource: require("../../../../assets/icon/selfCare.png"),
			isChecked: false,
		},
		{
			id: 6,
			label: "fit in a quick workout",
			imageSource: require("../../../../assets/icon/workout.png"),
			isChecked: false,
		},
		{
			id: 7,
			label: "meditate by taking deep breaths",
			imageSource: require("../../../../assets/icon/meditation.png"),
			isChecked: false,
		},
		{
			id: 8,
			label: "prepare for the day",
			imageSource: require("../../../../assets/icon/prepare.png"),
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
				<View>
					<Title
						CustomTitle={
							<View>
								<Text style={styles.title}>
									follow the list below
								</Text>
								<Text style={styles.subtitle}>
									for your{" "}
									<Text style={{ fontWeight: 500 }}>
										morning routine
									</Text>
								</Text>
							</View>
						}
					/>
					<View style={styles.list}>
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
					</View>
				</View>
				<Next
					title="next >"
					onPress={() =>
						navigation.navigate("MorningRoutineCompleted")
					}
				/>
			</View>
		</View>
	);
};

export default ListScreen;
