import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	footerMenu: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 20,
		paddingBottom: 30,
		position: "absolute",
		bottom: 0,
		zIndex: 1,
		// backgroundColor: Colors.ui_light_purple,
	},

	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "92%",
	},

	menuItem: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		height: 50,
		width: 70,
		position: "relative",
	},

	menuItemTitle: {
		fontSize: 14,
		color: Colors.ui_white,
	},

	image: {
		width: 28,
		height: 28,
	},

	dot: {
		fontSize: 24,
		color: Colors.ui_white,
		position: "absolute",
		bottom: -20,
	},
});
