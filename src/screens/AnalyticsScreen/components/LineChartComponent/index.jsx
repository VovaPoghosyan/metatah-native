import { Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const LineChartComponent = ({ data }) => {
	return (
		<View style={{ paddingHorizontal: 20 }}>
			<View
				style={{
					backgroundColor: "#ffffffcc",
					borderRadius: 20,
					padding: 5,
					overflow: "hidden",
				}}>
				{data && (
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
						data={data.goals}
						data2={data.todos}
						data3={data.notes}
						flexDirection={"row"}
						height={220}
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
				)}
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
						marginRight: 20,
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
