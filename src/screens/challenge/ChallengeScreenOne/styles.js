import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20,
	},

	containerBlock: {
		width: "100%",
		flex: 1,
		fontFamily: "antipasto",
		paddingTop: 20,
		flexDirection: "column",
	},

	title: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.ui_purple,
	},

	blockTitle: {
		fontSize: 22,
		fontWeight: "500",
		color: Colors.ui_purple,
		marginBottom: 10,
		alignSelf: "flex-start",
	},

	notes: {
		width: "100%",
	},

	notesTextInput: {
		fontSize: 18,
		fontWeight: "300",
		borderWidth: 1,
		borderColor: Colors.ui_purple,
		width: "100%",
		height: 150,
		paddingHorizontal: 10,
		borderRadius: 3,
		backgroundColor: Colors.ui_white_2,
	},

	scrollView: {
		width: "100%",
	},

	next: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
	},
});
