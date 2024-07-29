import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";
import { Colors } from "../../../../constants";

const LineChartComponent = () => {
	const goalData = [
		{ value: 0, dataPointText: "0" },
		{ value: 10, dataPointText: "10" },
		{ value: 8, dataPointText: "8" },
		{ value: 58, dataPointText: "58" },
		{ value: 56, dataPointText: "56" },
		{ value: 78, dataPointText: "78" },
		{ value: 60, dataPointText: "60" },
		{ value: 98, dataPointText: "98" },
		{ value: 72, dataPointText: "72" },
		{ value: 83, dataPointText: "83" },
		{ value: 50, dataPointText: "50" },
		{ value: 32, dataPointText: "32" },
		{ value: 65, dataPointText: "65" },
	];

	const todoData = [
		{ value: 0, dataPointText: "0" },
		{ value: 20, dataPointText: "20" },
		{ value: 18, dataPointText: "18" },
		{ value: 40, dataPointText: "40" },
		{ value: 36, dataPointText: "36" },
		{ value: 60, dataPointText: "60" },
		{ value: 54, dataPointText: "54" },
		{ value: 43, dataPointText: "43" },
		{ value: 67, dataPointText: "67" },
		{ value: 50, dataPointText: "50" },
		{ value: 10, dataPointText: "10" },
		{ value: 32, dataPointText: "32" },
		{ value: 65, dataPointText: "65" },
	];

	const noteData = [
		{ value: 0, dataPointText: "0" },
		{ value: 37, dataPointText: "37" },
		{ value: 64, dataPointText: "64" },
		{ value: 90, dataPointText: "90" },
		{ value: 80, dataPointText: "80" },
		{ value: 60, dataPointText: "60" },
		{ value: 70, dataPointText: "70" },
		{ value: 85, dataPointText: "85" },
		{ value: 85, dataPointText: "85" },
		{ value: 72, dataPointText: "72" },
		{ value: 83, dataPointText: "83" },
		{ value: 50, dataPointText: "50" },
		{ value: 32, dataPointText: "32" },
	];

	return (
		<View style={{ paddingHorizontal: 20 }}>
			<Text
				style={{
					fontSize: 32,
					fontWeight: 700,
					textAlign: "center",
					color: Colors.ui_white,
					marginBottom: 20,
				}}>
				metatah analytics
			</Text>
			<View
				style={{
					backgroundColor: "#ffffffcc",
					borderRadius: 20,
					padding: 5,
					overflow: "hidden",
				}}>
				<LineChart
					xAxisLabelTexts={[
						"Jan",
						"Feb",
						"March",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					]}
					data={goalData}
					data2={todoData}
					data3={noteData}
					flexDirection={"row"}
					height={250}
					showVerticalLines
					spacing={44}
					// initialSpacing={0}
					color1="#006DFF"
					color2="#8F80F3"
					color3="#3BE9DE"
					dataPointsHeight={6}
					dataPointsWidth={6}
					dataPointsColor1="#006DFF"
					dataPointsColor2="#8F80F3"
					dataPointsColor3="#3BE9DE"
					textShiftY={-2}
					textShiftX={-5}
					textFontSize={13}
				/>
			</View>
			{renderLegendComponent()}
		</View>
	);
};

const renderDot = (color) => {
	return (
		<View
			style={{
				height: 15,
				width: 15,
				borderRadius: 20,
				backgroundColor: color,
				marginRight: 10,
			}}
		/>
	);
};

const renderLegendComponent = () => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 20,
					marginBottom: 10,
				}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginRight: 20,
					}}>
					{renderDot("#006DFF")}
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: 500,
						}}>
						goals
					</Text>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}>
					{renderDot("#8F80F3")}
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: 500,
						}}>
						todos
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
				}}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
					}}>
					{renderDot("#3BE9DE")}
					<Text
						style={{
							color: "white",
							fontSize: 20,
							fontWeight: 500,
						}}>
						notes
					</Text>
				</View>
			</View>
		</>
	);
};

export default LineChartComponent;
