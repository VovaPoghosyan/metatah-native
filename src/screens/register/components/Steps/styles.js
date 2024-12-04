import { StyleSheet } from "react-native";
import { Colors } from "../../../../constants";

export const styles = StyleSheet.create({
	steps: {
		flexDirection: "row",
		marginTop: 24,
		marginLeft: 12,
	},

	stepLine: {
		width: 38,
		height: 2,
		margin: 4,
	},

	active: {
		backgroundColor: Colors.ui_purple,
	},

	passive: {
		backgroundColor: Colors.ui_purple_gray,
	},
});
