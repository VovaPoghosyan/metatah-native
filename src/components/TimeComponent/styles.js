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
});
