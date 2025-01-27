import { StyleSheet } from "react-native";
import { Colors, Window } from "../../../constants";

export const styles = StyleSheet.create({
	editProfileContainer: {
		paddingHorizontal: 24,
		width: '100%',
		flex: 1,
		paddingTop: 24,
		paddingBottom: 150,
	},

	avatarBlock: {
		alignItems: 'center',
		position: 'relative',
		marginBottom: 24,
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

	profilePicture: {
		width: '100%',
		height: '100%',
	},

	editIcon: {
		position: 'absolute',
		bottom: -32,
		left: '50%',
		transform: [{ translateX: -20 }],
		padding: 8
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
		fontSize: 24,
		fontFamily: "Mardoto-Regular",
		color: Colors.ui_purple,
	},

	logout: {
		flexDirection: 'row',
		alignItems: 'center',
	},

	textInput: {
		fontSize: 18,
		fontWeight: "300",
		paddingLeft: 0,
		paddingBottom: 4,
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

	absoluteFill: {
		position: "absolute",
		width: "100%",
		height: "100%",
	},

	captureButtonContainer: {
		position: "absolute",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		bottom: 40,
		left: Window.width / 2 - 95,
	},

	captureBorder: {
		width: 80,
		height: 80,
		borderWidth: 2,
		borderRadius: 50,
		borderColor: Colors.ui_light_gray,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},

	captureButton: {
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: Colors.ui_light_gray,
	},

	galleryIcon: {
		marginRight: 24,
	}
});
