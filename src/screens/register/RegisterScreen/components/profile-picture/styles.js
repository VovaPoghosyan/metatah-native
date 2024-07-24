import { StyleSheet } from "react-native";
import { Colors, Fonts, Window } from "../../../../../constants";

export const styles = StyleSheet.create({
	camera: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},

	capturedImage: {
		width: "99%",
		height: "99%",
		borderRadius: 500,
		aspectRatio: 1,
		top: "1%",
		left: "1%",
	},

	uploadContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 300,
		overflow: "hidden",
	},

	iconsContainer: {
		flex: 1,
		flexDirection: "row",
		marginTop: 40,
		width: "100%",
	},

	iconTitle: {
		color: Colors.ui_purple,
		fontSize: 25,
		fontWeight: "500",
		textAlign: "center",
	},
});
