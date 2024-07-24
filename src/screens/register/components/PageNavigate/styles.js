import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants";

export const styles = StyleSheet.create({
	footer: {
	},

	next: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
		width: "100%",
	},

	both: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},

	textNext: {
		fontSize: 24,
		color: Colors.ui_white,
	},
});
