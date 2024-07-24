import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const EveningStartScreen = () => {
	// useState
	const [isExpanded, setIsExpanded] = useState(false);

	// useNavigation
	const navigation = useNavigation();

	// constants
	const longText =
		"humans are creatures of habit.\nlike any other routine, bedtime routines establish habits that help our brains recognise when it’s time to sleep. by performing the same activities in the same order every night, your brain comes to see those activities as a precursor to sleep.bedtime routines help your brain separate the day from the night, clear your mind and body of the day’s stresses, and relax into sleep.";

	// functions
	const toggleReadMore = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title title="evening routine" />
					<View style={styles.textBlock}>
						<Text style={styles.text}>
							{isExpanded
								? longText
								: `${longText.slice(0, 143)}...`}
						</Text>
						<TouchableOpacity onPress={toggleReadMore}>
							<Text style={styles.readMoreLess}>
								{isExpanded ? "read less" : "read more"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Next
					title="new"
					onPress={() =>
						navigation.navigate("EveningRoutineProductive")
					}
				/>
			</View>
		</View>
	);
};

export default EveningStartScreen;
