import { ActivityIndicator, StyleSheet } from "react-native";

const Loading = () => {
	return (
		<ActivityIndicator
			style={styles.spinner}
			color={"#fff"}
		/>
	);
};

const styles = StyleSheet.create({
	spinner: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: "rgba(128, 128, 128, 0.5)",
		justifyContent: "center",
		alignItems: "center",
		zIndex: 10,
	},
});

export default Loading;
