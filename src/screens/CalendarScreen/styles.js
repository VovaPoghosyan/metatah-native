import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	item: {
		backgroundColor: "white",
		borderRadius: 5,
		padding: 10,
		marginRight: 10,
		marginTop: 17,
	},

	goals: {
		marginTop: 8,
		width: "100%",
	},

	title: {
		width: "100%",
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	taskTitle: {
		width: 80,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		paddingVertical: 4,
		marginBottom: 4,
		backgroundColor: Colors.ui_light_blue,
	},

	taskTitleText: {
		fontSize: 20,
		lineHeight: 20,
		fontWeight: "400",
		color: Colors.ui_white,
	},

	emptyDate: {
		padding: 12,
		fontSize: 24,
		fontWeight: "500",
		color: Colors.ui_purple,
		textAlign: "center",
	},

	addNew: {
		backgroundColor: Colors.ui_light_gray_2,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderRadius: 20,
	},

	addNewText: {
		fontSize: 18,
		fontWeight: 500,
		color: Colors.ui_purple,
	},
});
