import { StyleSheet } from "react-native";
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
	profileContainer: {
		paddingHorizontal: 24,
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		paddingTop: 24,
		paddingBottom: 150,
	},

	avatarBlock: {
		alignItems: 'center',
	},

	avatar: {
		width: 138,
		height: 138,
		backgroundColor: Colors.ui_white,
		borderRadius: 200,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},

	userName: {
		fontSize: 28,
		fontFamily: "Mardoto-Regular",
		color: Colors.ui_purple,
		marginTop: 18,
	},

	item: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: 16,
	},

	itemTitle: {
		fontSize: 22,
		fontFamily: "Mardoto-Regular",
		color: Colors.ui_purple,
	},

	logout: {
		flexDirection: 'row',
		alignItems: 'center',
	}
});
