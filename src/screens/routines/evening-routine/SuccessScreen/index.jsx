import React from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const SuccessScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Title
					CustomTitle={
						<View>
							<Text style={styles.title}>you have</Text>
							<Text style={styles.titleBold}>successfully</Text>
							<Text style={styles.title}>
								completed your evening routing
							</Text>
						</View>
					}
				/>
				<Text style={styles.subtitle}>have a good night !</Text>
				<Next
					title="done"
					onPress={() => navigation.navigate("Routines")}
				/>
			</View>
			<Image
				source={require("../../../../assets/img/moon.png")}
				style={styles.image}
				resizeMode="contain"
			/>
		</View>
	);
};

export default SuccessScreen;
