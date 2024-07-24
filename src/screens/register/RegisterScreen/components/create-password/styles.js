import { StyleSheet } from "react-native";
import { Colors, Fonts, Window } from "../../../../../constants";

export const styles = StyleSheet.create({
	rememberBlock: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	rememberText: {
		color: Colors.ui_white,
		// fontFamily: Fonts.antipasto,
		fontWeight: "400",
		fontSize: 18,
	},

	rememberContainer: {
		backgroundColor: "transparent",
		padding: 0,
		borderWidth: 0,
		marginLeft: 1,
	},

	passwordFooterBlock: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
		marginTop: 32,
	},

	forgotText: {
		color: Colors.ui_purple,
		// fontFamily: Fonts.antipasto,
		fontWeight: "600",
		fontSize: 18,
		textDecorationLine: "underline",
	},
});
