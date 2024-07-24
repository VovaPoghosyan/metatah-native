import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const StartScreen = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Title
					title="morning routine"
					description="as we start each day fresh, we can better focus on what is in front of
          us, where to prioritize our time, and, ultimately, increase our
          productivity."
				/>
				<Next
					title="new"
					onPress={() => navigation.navigate("MorningRoutineFeel")}
				/>
			</View>
			<Image
				source={require("../../../../assets/img/human-hands.png")}
				style={styles.image}
				resizeMode="contain"
			/>
		</View>
	);
};

export default StartScreen;
