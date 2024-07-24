import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";
import AskQuestion from "../../components/AskQuestion";

const MorningRoutineGoalsScreen = () => {
	// useState
	const [selectedVariant, setSelectedVariant] = useState(null);
	const [goals, setGoals] = useState({
		1: "",
		2: "",
		3: "",
	});

	// useNavigation
	const navigation = useNavigation();

	// functions
	const handleVariantSelect = (variant) => {
		setSelectedVariant(variant);
	};

	const handleChangeThing = (value, key) => {
		setGoals({ ...goals, [key]: value });
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title
						CustomTitle={
							<View>
								<Text style={styles.title1}>
									what{" "}
									<Text
										style={{
											fontSize: 30,
											fontWeight: 600,
										}}>
										top 3 goals
									</Text>
								</Text>
								<Text style={styles.title2}>
									do i want to{" "}
									<Text style={{ fontWeight: 500 }}>
										achieve
									</Text>{" "}
									within the near future to{" "}
									<Text style={{ fontWeight: 600 }}>
										feel a sense
									</Text>{" "}
									of
								</Text>
								<Text style={styles.title3}>
									accomplishment?
								</Text>
							</View>
						}
					/>
					{Object.keys(goals).map((key) => (
						<View
							style={styles.goal}
							key={key}>
							<Text style={styles.listNumber}>{key}|</Text>
							<Input
								value={goals[key]}
								onChangeText={(value) =>
									handleChangeThing(value, key)
								}
								style={styles.answer}
								placeholder="add text …"
								inputContainerStyle={{ borderBottomWidth: 0 }}
								placeholderTextColor={Colors.ui_white}
							/>
						</View>
					))}
					<AskQuestion onSelectVariant={handleVariantSelect} />
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("MorningRoutineList")}
				/>
			</View>
		</View>
	);
};

export default MorningRoutineGoalsScreen;
