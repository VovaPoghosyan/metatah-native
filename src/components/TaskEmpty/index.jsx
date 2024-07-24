import React, { memo } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Background from "../Background";

const TaskEmpty = (props) => {
	const { title } = props;
	const navigation = useNavigation();

	return (
		<View style={styles.containerFluid}>
			<Background />
			<View style={styles.container}>
				<View style={styles.content}>
					<Image
						source={require("../../assets/img/empty.png")}
						style={styles.image}
						resizeMode="cover"
					/>
					<View style={styles.textContent}>
						<Text style={styles.title}>
							your {title} list is empty
						</Text>
						<Text style={styles.subtitle}>
							press create to add tasks
						</Text>
						<TouchableOpacity
							style={styles.next}
							onPress={() =>
								navigation.navigate(
									`${
										title === "goal" ? "AddOrEditGoal" : "AddOrEditTodo"
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

export default memo(TaskEmpty);
