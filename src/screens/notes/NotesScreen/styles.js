import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	notes: {
		flex: 1,
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "stretch",
		overflow: "hidden",
		paddingBottom: 20,
	},

	titleContainer: {
		marginTop: 47,
		marginBottom: 20,
	},

	title: {
		fontSize: 24,
		color: Colors.ui_purple,
		paddingLeft: 10,
		marginBottom: 10,
	},

	noteList: {
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		paddingHorizontal: 32,
	},

	noteBlock: {
		backgroundColor: Colors.ui_lightGray,
		borderRadius: 5,
		minHeight: 74,
		padding: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginVertical: 8,
		borderWidth: 1,
		borderColor: Colors.ui_dark_purple,
	},

	noteTitle: {
		fontSize: 22,
		textAlign: "center",
		letterSpacing: 0.28,
		lineHeight: 34,
		fontWeight: "300",
		color: Colors.ui_purple,
		textTransform: "lowercase",
	},

	buttonContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 20,
	},

	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
	},

	taskContentIcon: {
		width: 18,
		height: 18,
	},
});
