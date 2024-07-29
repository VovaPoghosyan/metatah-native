import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const PieChartComponent = () => {
	const pieData = [
		{
			value: 47,
			color: "#009FFF",
			gradientCenterColor: "#006DFF",
			gradientCenterColor: "#006DFF",
			focused: true,
		},
		{ value: 40, color: "#93FCF8", gradientCenterColor: "#3BE9DE" },
		{ value: 13, color: "#BDB2FA", gradientCenterColor: "#8F80F3" },
	];

	return (
		<View
			style={{
				margin: 20,
				padding: 16,
				borderRadius: 20,
				// backgroundColor: Colors.ui_darker_purple,
			}}>
			<Text
				style={{
					color: "white",
					fontSize: 32,
					fontWeight: 700,
					textAlign: "center",
				}}>
				metatah analytics
			</Text>
			<View style={{ padding: 20, alignItems: "center" }}>
				<PieChart
					data={pieData}
					donut
					showGradient
					sectionAutoFocus
					radius={90}
					innerRadius={60}
					innerCircleColor={"#7f488b"}
					centerLabelComponent={() => {
						return (
							<View
								style={{
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Text
									style={{
										fontSize: 22,
										color: "white",
										fontWeight: "bold",
									}}>
									47%
								</Text>
								<Text
									style={{
										fontSize: 14,
										color: "white",
									}}>
									Excellent
								</Text>
							</View>
						);
					}}
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
				height: 10,
				width: 10,
				borderRadius: 5,
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
						goals: 47%
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
						todos: 13%
					</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 5,
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
						notes: 40%
					</Text>
				</View>
			</View>
		</>
	);
};

export default PieChartComponent;
