import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Colors } from "../../constants";

const Background = ({ imageName }) => {
	const imagePath = () => {
		switch (imageName) {
			case "mr-bg":
				return require("../../assets/img/mr-bg.png");
			case "bg-top":
				return require("../../assets/img/bg-top-1.png");
			default:
				return require("../../assets/img/background-1.png");
		}
	};

	const source = imagePath();

	return (
		<View style={styles.background}>
			<Image
				source={source}
				style={{
					...styles.image,
					top: imageName === "bg-top" ? 0 : "auto",
				}}
				resizeMode="cover"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex: -1,
		marginBottom: 0,
		padding: 0,
		backgroundColor: Colors.ui_gray_bg,
	},

	image: {
		position: "absolute",
		width: "100%",
		marginBottom: 0,
		bottom: 0,
	},
});

export default Background;
