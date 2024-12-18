import React, { useEffect, useState } from "react";
import { View, Text, Platform, StyleSheet, TextInput } from "react-native";
import { Colors } from "../../constants";
import { Icon } from "react-native-elements";

const RNSTextInput = (props) => {
	const [secureTextEntry, setSecureTextEntry] = useState(false);
	const {
		style,
		name,
		label,
		type,
		placeholderTextColor,
		keyboardType,
		error,
		...restProps
	} = props;

	useEffect(() => {
		if (type === "password") {
			setSecureTextEntry(true);
		}
	}, [type]);

	const finalStyle = [styles.default, style, error && styles.invalid];

	return (
		<View style={styles.formGroup}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				placeholderTextColor={
					placeholderTextColor ||
					(error && Colors.ui_error) ||
					Colors.ui_purple
				}
				{...restProps}
				keyboardType={keyboardType || "default"}
				style={finalStyle}
				type={type}
			/>
			{type === "password" && (
				<View style={styles.showPasswordContainer}>
					<Icon
						name={secureTextEntry ? "visibility-off" : "visibility"}
						type="material"
						size={25}
						color={Colors.ui_purple}
						onPress={() => setSecureTextEntry(!secureTextEntry)}
					/>
				</View>
			)}
			{error && <Text style={styles.errorText}>{error}</Text>}
			{/* {Platform.OS === "ios" && (
				<View
					style={{ height: 0.5, backgroundColor: Colors.ui_white }}
				/>
			)} */}
		</View>
	);
};

const HEIGHT = 35;

const styles = StyleSheet.create({
	default: {
		height: HEIGHT,
		color: Colors.ui_purple,
		// fontFamily: Fonts.antipasto,
		borderBottomWidth: 2,
		borderBottomColor: Colors.ui_purple,
		fontSize: 20,
		fontWeight: "600",
		paddingHorizontal: 8,
		letterSpacing: 1,

		...Platform.select({
			android: {
				paddingLeft: 5,
				opacity: 0.9,
			},
		}),
	},

	formGroup: {
		paddingVertical: 10,
		alignSelf: "stretch",
		flexDirection: "column",
		position: "relative",
	},

	primary: {
		borderRadius: HEIGHT / 2,
		backgroundColor: "transparent",
	},

	label: {
		color: Colors.ui_white,
		fontSize: 20,
		letterSpacing: 1,
	},

	showPasswordContainer: {
		height: HEIGHT,
		position: "absolute",
		right: 0,
		top: 32,
	},

	invalid: {
		borderBottomColor: Colors.ui_error,
	},

	errorText: {
		color: Colors.ui_error,
		bottom: -12,
		position: "absolute",
	},
});

export default RNSTextInput;
