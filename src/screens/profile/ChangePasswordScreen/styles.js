import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	passwordContainer: {
		paddingHorizontal: 24,
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 24,
		paddingBottom: 150,
	},

	textInput: {
		fontSize: 18,
		fontWeight: "300",
		paddingLeft: 0,
		marginBottom: 8,
	},

	footer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	footerText: {
		fontSize: 24,
		fontFamily: "Mardoto-Regular",
		color: Colors.ui_purple,
	},
});
