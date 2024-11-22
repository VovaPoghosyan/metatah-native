import { StyleSheet } from "react-native";
import { Colors, Fonts, Window } from "../../../../../constants";

export const styles = StyleSheet.create({
	notificationBlock: {
		flexDirection: "row",
		paddingLeft: 0,
	},

	checkboxLabel: {
		fontSize: 25,
		lineHeight: 25,
		fontWeight: "300",
		color: Colors.ui_purple,
		marginBottom: 14,
	},

	checkboxContainer: {
		borderWidth: 0,
		backgroundColor: "transparent",
		padding: 0,
		marginLeft: 0,
	},

	checkboxText: {
		fontSize: 25,
		lineHeight: 25,
		fontWeight: "300",
		color: Colors.ui_purple,
		textDecorationLine: "underline",
	},
});
