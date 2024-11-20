import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const PageNavigate = ({
	data,
	isNotFirst,
	isLast,
	disabled,
	onPressBack,
	onPressNext,
	mutateRegisterUser,
}) => {
	// formData
	const formData = new FormData();
	Object.keys(data).forEach((key) => {
		if (data[key] !== undefined) {
			formData.append(key, data[key]);
		}
	});

	// functions
	const createUser = () => {
		mutateRegisterUser.mutate(formData);
	};

	return (
		<View style={[styles.footer, isNotFirst ? styles.both : styles.next]}>
			{isNotFirst && (
				<TouchableOpacity
					style={{ paddingVertical: 24, paddingHorizontal: 12 }}
					onPress={onPressBack}>
					<Text style={styles.textNext}>{"< back"}</Text>
				</TouchableOpacity>
			)}
			<TouchableOpacity
				disabled={disabled}
				style={{ paddingVertical: 24, paddingHorizontal: 12 }}
				onPress={isLast ? createUser : onPressNext}>
				<Text
					style={{ ...styles.textNext, opacity: disabled ? 0.5 : 1 }}>
					{isLast ? "create" : "next >"}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PageNavigate;
