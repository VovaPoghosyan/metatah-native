import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
	pageTitle: {
		fontSize: 48,
		fontWeight: "600",
		color: Colors.ui_purple,
		marginBottom: 16,
	},

	pageSubtitle: {
		fontSize: 32,
		lineHeight: 32,
		fontWeight: "500",
		color: Colors.ui_purple,
		marginBottom: 16,
	},

	updatedDate: {
		fontSize: 16,
		fontStyle: "italic",
		fontWeight: "600",
		color: Colors.ui_purple,
		marginBottom: 16,
	},

	title: {
		fontSize: 18,
		fontWeight: "600",
		color: Colors.ui_purple,
		marginBottom: 8,
	},

	subSection: {
		marginTop: 16,
	},

    text: {
        fontSize: 14,
		fontWeight: "600",
		color: Colors.ui_purple,
		marginBottom: 16,
    }
});
