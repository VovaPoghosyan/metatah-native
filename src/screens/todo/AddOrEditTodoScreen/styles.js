import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},

	titleContainer: {
		marginTop: 24,
		marginBottom: 10,
	},

	title: {
		fontSize: 24,
		color: Colors.ui_purple,
	},

	toDoSection: {
		paddingVertical: 20,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		overflow: "hidden",
	},

	periodDate: {
		marginVertical: 8,
	},

	periodTime: {
		flexDirection: "row",
		alignItems: "center",
		display: "flex",
		justifyContent: "space-between",
	},

	timeBlock: {
		width: "48%",
	},

	label: {
		fontSize: 18,
		fontWeight: "500",
		color: Colors.ui_dark_purple,
		marginBottom: 4,
	},

	footer: {
		flexDirection: "row",
		alignItems: "center",
		display: "flex",
		justifyContent: "space-between",
		marginTop: 24,
		paddingHorizontal: 32,
	},

	addText: {
		fontSize: 24,
		fontWeight: "500",
		color: Colors.ui_white,
	},

	cancelText: {
		fontSize: 24,
		fontWeight: "400",
		color: Colors.ui_white,
	},
});
