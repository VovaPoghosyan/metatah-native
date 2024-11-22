import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const PageNavigate = ({
	isNotFirst,
	isLast,
	disabled,
	onPressBack,
	onPressNext,
	mutateRegisterUser,
	userId,
}) => {
	const createUser = () => {
		mutateRegisterUser.mutate({ data: { user_id: userId }, step: "six" });
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
