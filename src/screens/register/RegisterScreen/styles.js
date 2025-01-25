import { StyleSheet } from "react-native";
import { Colors, Window } from "../../../constants";

export const styles = StyleSheet.create({
	registerScreen: {
		backgroundColor: Colors.ui_gray_bg,
		height: "100%",
	},

	registerScreenContainer: {
		padding: 15,
		flex: 1,
		width: "100%",
	},

	titleContainer: {
		paddingVertical: 10,
	},

	title: {
		fontSize: 24,
		fontWeight: "300",
		color: Colors.ui_purple,
	},

	titleBold: {
		fontSize: 32,
		color: Colors.ui_purple,
		fontWeight: 600,
	},

	textInput: {
		fontSize: 18,
		fontWeight: "300",
		paddingLeft: 0,
		paddingBottom: 4,
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
