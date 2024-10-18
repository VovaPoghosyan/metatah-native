import { Text, View } from "react-native";
import { useStatistics } from "../../state/hooks/query/statistics/useStatistics";
import Background from "../../components/Background";
import FooterMenu from "../../components/FooterMenu";
import PieChartComponent from "./components/PieChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import Spinner from "react-native-loading-spinner-overlay";

const AnalyticsScreen = () => {
	const { data, isLoading, isFetching } = useStatistics();

	return (
		<View style={{ flex: 1 }}>
			<Background imageName="mr-bg" />
			<Spinner visible={isLoading || isFetching} />
			<View style={{ flex: 1, paddingTop: 18 }}>
				<Text
					style={{
						color: "white",
						fontSize: 32,
						fontWeight: 700,
						textAlign: "center",
					}}>
					metatah analytics
				</Text>
				<PieChartComponent data={data?.pieData} />
				<LineChartComponent data={data?.lineData} />
			</View>
			<View style={{ padding: 10 }}>
				<FooterMenu />
			</View>
		</View>
	);
};

export default AnalyticsScreen;
