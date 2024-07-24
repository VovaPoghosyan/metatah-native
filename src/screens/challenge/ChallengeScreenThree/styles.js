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
		fontSize: 32,
		fontWeight: "400",
		color: Colors.ui_white,
	},

	subtitle: {
		flex: 1,
		width: "100%",
		flexDirection: "column",
		marginTop: 32,
	},

	subtitleText: {
		fontSize: 16,
		fontWeight: "400",
		color: Colors.ui_white,
	},

	description: {
		fontSize: 16,
		fontWeight: "400",
		color: Colors.ui_white,
		marginBottom: 24,
	},

	next: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		color: "white",
	},
});
