import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	timeSection: {
		width: "100%",
		borderWidth: 1,
		borderColor: Colors.ui_purple,
		borderRadius: 3,
		overflow: "hidden",
	},

	timeLabel: {
		padding: 12,
		width: "auto",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	time: {
		flexDirection: "row",
		alignItems: "center",
	},

	timeText: {
		marginLeft: 10,
	},

	timeContent: {
		padding: 12,
	},

	labelTime: {
		color: Colors.ui_dark_purple,
		fontSize: 16,
		fontWeight: "600",
		marginBottom: 8,
	},

	label: {
		color: Colors.ui_dark_purple,
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 12,
	},
});
