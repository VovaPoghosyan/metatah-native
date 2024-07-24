import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Next = ({ title, onPress }) => {
	return (
		<TouchableOpacity
			style={styles.next}
			onPress={onPress}>
			<Text style={styles.textNext}>{title}</Text>
		</TouchableOpacity>
	);
};

export default Next;
