import { StyleSheet } from "react-native";
import { Colors, Fonts, Window } from "../../../../../constants";

export const styles = StyleSheet.create({
	anotherOption: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 20,
	},

	anotherOptionText: {
		fontSize: 20,
		letterSpacing: 1,
		color: Colors.ui_white,
	},

	anotherOptionLink: {
		fontSize: 22,
		fontWeight: "600",
		letterSpacing: 1,
		marginLeft: 5,
		color: Colors.ui_purple,
		textDecorationLine: "underline",
	},
});
