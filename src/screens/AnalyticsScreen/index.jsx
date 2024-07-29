import { View } from "react-native";
import Background from "../../components/Background";
import FooterMenu from "../../components/FooterMenu";
import PieChartComponent from "./components/PieChartComponent";
import { styles } from "./styles";

const AnalyticsScreen = () => {
	return (
		<View style={styles.container}>
			<Background />
			<View style={{ flex: 1 }}>
				<PieChartComponent />
				{/* <LineChartComponent /> */}
			</View>
			<View style={{ padding: 10 }}>
				<FooterMenu />
			</View>
		</View>
	);
};

export default AnalyticsScreen;
