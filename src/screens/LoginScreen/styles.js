import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../constants";

export const styles = StyleSheet.create({
	titleContainer: {
		paddingVertical: 50,
	},

	title: {
		fontSize: 32,
		color: Colors.ui_purple,
		fontWeight: 600,
		// fontFamily: Fonts.antipasto,
	},

	textInput: {
		fontSize: 18,
		fontWeight: "300",
		paddingLeft: 0,
		paddingBottom: 0,
	},

	buttonContainer: {
		paddingVertical: 16,
		marginTop: 20,
	},

	actionsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	agreeText: {
		marginLeft: 0,
		fontSize: 18,
		fontWeight: "300",
		color: Colors.ui_purple,
		// fontFamily: Fonts.antipasto,
	},

	agreeContainer: {
		backgroundColor: "#00000000",
		padding: 0,
		marginLeft: 0,
	},

	anotherOption: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingTop: 20,
	},

	anotherOptionText: {
		fontSize: 16,
		letterSpacing: 1,
		color: Colors.ui_purple,
	},

	anotherOptionLink: {
		fontSize: 20,
		fontWeight: "600",
		letterSpacing: 1,
		marginLeft: 5,
		color: Colors.ui_purple,
		textDecorationLine: "underline",
	},

	forgot: {
		fontSize: 18,
		fontWeight: "600",
		letterSpacing: 1,
		marginLeft: 5,
		color: Colors.ui_purple,
		textDecorationLine: "underline",
	},
});
