import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

const PieChartComponent = ({ data }) => {
	// useState
	const [activeItem, setActiveItem] = useState(null);

	// useEffect
	useEffect(() => {
		if (data) {
			const active = data?.find((item) => item.focused);
			setActiveItem(active);
		}
	}, [data]);

	// functions
	const changeActiveItem = (selected) => setActiveItem(selected);

	const renderLegendComponent = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 20,
					marginBottom: 10,
				}}>
				{data?.map((item, index) => (
					<View
						key={index}
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center",
							paddingHorizontal: 8,
						}}>
						<View style={{ width: 15 }}>
							{renderDot(item.color)}
						</View>
						<Text
							style={{
								color: item.color,
								fontSize: 14,
								fontWeight: 500,
								marginLeft: 0,
							}}>
							{item.title}: {item.value}%
						</Text>
					</View>
				))}
			</View>
		);
	};

	return (
		<View style={{ padding: 16, borderRadius: 20 }}>
			<View style={{ alignItems: "center" }}>
				{data && (
					<PieChart
						data={data}
						donut
						showGradient
						sectionAutoFocus
						focusOnPress
						onPress={changeActiveItem}
						radius={90}
						innerRadius={65}
						innerCircleColor={"#E0DEE0"}
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
											color: "#6D428D",
											fontWeight: "bold",
										}}>
										{activeItem?.value}%
									</Text>
									<Text
										style={{
											fontSize: 14,
											color: "#6D428D",
										}}>
										{activeItem?.title}
									</Text>
								</View>
							);
						}}
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
				height: 10,
				width: 10,
				borderRadius: 5,
				backgroundColor: color,
				marginRight: 10,
			}}
		/>
	);
};

export default PieChartComponent;
