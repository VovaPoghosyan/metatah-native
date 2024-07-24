import { StyleSheet } from "react-native";
import { Colors, Window } from "../../../constants";

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

	goalSection: {
		flex: 1,
	},

	goalSectionContainer: {
		paddingVertical: 20,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		overflow: "hidden",
	},

	goalTypeContent: {
		maxWidth: 300,
		flexDirection: "column",
		justifyContent: "flex-start",
		marginBottom: 5,
		borderRadius: 3,
	},

	desireItem: {
		paddingHorizontal: 15,
		paddingVertical: 5,
		justifyContent: "flex-start",
	},

	goalTypeItem: {
		paddingHorizontal: 15,
		paddingVertical: 5,
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
