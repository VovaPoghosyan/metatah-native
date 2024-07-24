import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	roleSection: {
		width: "100%",
		marginBottom: 10,
		borderBottomWidth: 2,
		borderBottomColor: Colors.ui_purple,
		overflow: "hidden",
	},

	roleLabel: {
		// width: "auto",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},

	roleContent: {
		paddingHorizontal: 12,
	},

	roleItems: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 5,
	},

	selectedtText: {
        fontSize: 24,
        lineHeight: 36,
		fontWeight: "300",
		color: Colors.ui_purple,
		paddingLeft: 0,
	},

    itemText: {
        fontSize: 18,
        lineHeight: 18,
		fontWeight: "300",
		color: Colors.ui_purple,
		paddingLeft: 0,
	},

	roleIcon: {
		width: 18,
		height: 18,
		objectFit: "contain",
	},

	roleText: {
		fontSize: 16,
		fontWeight: "500",
		color: Colors.ui_purple,
	},
});
