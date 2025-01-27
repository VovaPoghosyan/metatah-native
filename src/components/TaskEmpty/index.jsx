import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Background from "../Background";

const TaskEmpty = (props) => {
	// props
	const { title } = props;

	// useNavigation
	const navigation = useNavigation();

	// functions
	const getIcon = () => {
		switch (title) {
			case 'task':
				return require("../../assets/img/empty.png");
			case 'goal':
				return require("../../assets/img/goals-bg.png");
			case 'to-do':
				return require("../../assets/img/notes-bg.png");
			case 'notes':
				return require("../../assets/img/notes-bg.png");
			default:
				return require('../../assets/img/empty.png');
		}
	};

	return (
		<View style={styles.containerFluid}>
			<Background />
			<View style={styles.container}>
				<View style={styles.content}>
					<Image
						source={getIcon()}
						style={styles.image}
						resizeMode="cover"
					/>
					<View style={styles.textContent}>
						<Text style={styles.title}>
							your {title} list is empty
						</Text>
						<Text style={styles.subtitle}>
							press create to add {title}
						</Text>
						<TouchableOpacity
							style={styles.next}
							onPress={() =>
								navigation.navigate(
									`${title === "goal" ? "AddOrEditGoal" : "AddOrEditTodo"
									}`
								)
							}>
							<Text style={styles.textNext}>create +</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default TaskEmpty;
