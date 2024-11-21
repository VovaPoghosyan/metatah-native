import { Text, View } from "react-native";
import { useStatistics } from "../../state/hooks/query/statistics/useStatistics";
import Background from "../../components/Background";
import PieChartComponent from "./components/PieChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import Spinner from "react-native-loading-spinner-overlay";
import Layout from "../../layouts/Layout";

const AnalyticsScreen = () => {
	const { data, isLoading, isFetching } = useStatistics();

	return (
		<Layout>
			<Background imageName="mr-bg" />
			<View style={{ flex: 1 }}>
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
			</View>
		</Layout>
	);
};

export default AnalyticsScreen;
