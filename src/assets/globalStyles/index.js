import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	containerFluid: {
		width: "100%",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "antipasto",
	},

	container: {
		width: "100%",
		flex: 1,
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		fontFamily: "antipasto",
	},

	text: {
		fontSize: 24,
		fontWeight: "400",
		color: "white",
		fontFamily: "antipasto",
		marginTop: 10,
	},

	textInput: {
		fontSize: 24,
		fontWeight: "300",
		paddingLeft: 0,
	},

	bold: {
		fontWeight: "700",
	},

	p_10: {
		padding: 10,
	},

	ml_10: {
		marginLeft: 10,
	},

	mt_10: {
		marginTop: 10,
	},

	pv_10: {
		paddingVertical: 10,
	},

	pv_12: {
		paddingVertical: 12,
	},

	ph_10: {
		paddingHorizontal: 10,
	},

	row: {
		flexDirection: "row",
	},

	column: {
		flexDirection: "column",
	},

	jc_start: {
		justifyContent: "flex-start",
	},

	jc_center: {
		justifyContent: "center",
	},

	jc_between: {
		justifyContent: "space-between",
	},

	jc_end: {
		justifyContent: "flex-end",
	},

	ai_center: {
		alignItems: "center",
	},
});

export default globalStyles;
