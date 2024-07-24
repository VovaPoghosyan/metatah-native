import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { CheckBox, Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const DoneListScreen = () => {
	// useState
	const [checkboxes, setCheckboxes] = useState([
		{
			id: 1,
			value: "",
			isChecked: false,
		},
		{
			id: 2,
			value: "",
			isChecked: false,
		},
		{
			id: 3,
			value: "",
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

	const handleChangeThing = (value, id) => {
		const updatedCheckboxes = checkboxes.map((checkbox) =>
			checkbox.id === id ? { ...checkbox, value } : checkbox
		);
		setCheckboxes(updatedCheckboxes);
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title
						subtitle={
							"today you were planning \nto do the following."
						}
						title={"how much of it \nhave you done?"}
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
									<View style={styles.inputContainer}>
										<Input
											value={checkbox.value}
											onChangeText={(value) =>
												handleChangeThing(
													value,
													checkbox.id
												)
											}
											style={styles.answer}
											placeholder="add text …"
											inputContainerStyle={{
												borderBottomWidth: 0,
											}}
											placeholderTextColor={
												Colors.ui_white
											}
										/>
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
					onPress={() => navigation.navigate("EveningRoutineHabits")}
				/>
			</View>
		</View>
	);
};

export default DoneListScreen;
