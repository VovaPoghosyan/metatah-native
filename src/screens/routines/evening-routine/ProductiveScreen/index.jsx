import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";
import ProgressCircleComponent from "../../components/ProgressCircleComponent";

const ProductiveScreen = () => {
	//useState
	const [activePercent, setActivePercent] = useState(null);

	// useNavigation
	const navigation = useNavigation();

	// constants
	const percents = [0, 20, 60, 80, 100];

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title title="how productive were you today?" />
					<View style={styles.circles}>
						{percents.map((item) => (
							<ProgressCircleComponent
								key={item}
								percent={item}
								circleBorderColor={
									activePercent === item
										? Colors.ui_purple
										: Colors.ui_light_green
								}
								onPress={() => setActivePercent(item)}
							/>
						))}
					</View>
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("EveningRoutineDone")}
				/>
			</View>
		</View>
	);
};

export default ProductiveScreen;
