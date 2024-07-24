import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	item: {
		backgroundColor: "white",
		borderRadius: 5,
		marginTop: 17,
		paddingHorizontal: 20,
	},

	title: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	taskTitle: {
		width: 60,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		marginBottom: 4,
		backgroundColor: Colors.ui_purple,
	},

	taskTitleText: {
		fontSize: 18,
		lineHeight: 18,
		fontWeight: "400",
		color: Colors.ui_white,
	},

	taskText: {
		fontSize: 14,
		fontWeight: "400",
		color: Colors.ui_purple,
		textTransform: "lowercase",
	},

	emptyDate: {
		fontSize: 24,
		fontWeight: "500",
		color: Colors.ui_purple,
		textAlign: "center",
	},

	addNew: {
		borderWidth: 1,
		borderColor: Colors.ui_dark_purple,
		borderRadius: 20,
	},

	addNewText: {
		fontSize: 14,
		fontWeight: "400",
		color: Colors.ui_purple,
	},
});
