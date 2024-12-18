import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants";
import Background from "../../components/Background";
import { Button } from "../../components/Buttons";

const RoutinesScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Background />
			<View style={styles.content}>
				<TouchableOpacity
					style={styles.routineBlock}
					onPress={() => navigation.navigate("MorningRoutineStart")}>
					<Text style={styles.routineText}>morning routine</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.routineBlock}
					onPress={() => navigation.navigate("EveningRoutineStart")}>
					<Text style={styles.routineText}>evening routine</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.routineBlock}
					onPress={() => navigation.navigate("Analytics")}>
					<Text style={styles.routineText}>analytics</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},

	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	routineBlock: {
		padding: 10,
		borderWidth: 1,
		borderColor: Colors.ui_white,
		borderRadius: 8,
		backgroundColor: Colors.ui_gray_2,
		margin: 10,
		minWidth: 200,
	},

	routineText: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.ui_purple,
		textAlign: "center",
	},
});

export default RoutinesScreen;
