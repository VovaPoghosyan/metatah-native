import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	taskBlock: {
		marginVertical: 10,
		borderWidth: 1,
		borderRadius: 8,
		borderColor: Colors.ui_light_blue,
		paddingHorizontal: 16,
		paddingVertical: 8,
	},

	taskBlockTitle: {
		flexDirection: "row",
		alignItems: "center",
	},

	title: {
		fontSize: 18,
		fontWeight: "500",
		color: Colors.ui_purple,
		textTransform: "lowercase",
	},

	taskContent: {
		paddingTop: 10,
	},

	taskContentNote: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	taskContentIcon: {
		width: 18,
		height: 18,
	},

	taskContentText: {
		fontSize: 18,
		fontWeight: "400",
		maxWidth: "90%",
		color: Colors.ui_purple,
	},

	taskTime: {
		fontSize: 16,
		fontWeight: "400",
		color: Colors.ui_purple,
	},

	taskContentDate: {
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	taskContentDateBlock: {
		flexDirection: "row",
	},
});
