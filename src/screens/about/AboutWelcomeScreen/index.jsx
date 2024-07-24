import { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Button } from "../../../components/Buttons";
import { getToken } from "../../../state/helpers/auth";
import Background from "../../../components/Background";

function AboutWelcomeScreen() {
	// useNavigation
	const navigation = useNavigation();

	// functions
	const navigateToLearnScreen = () => {
		navigation.navigate("AboutLearn");
	};

	// constants
	const accessToken = getToken();

	// useEffect
	useEffect(() => {
		if (!accessToken) {
			navigation.navigate("Login");
		}
	}, [accessToken]);

	return (
		<View style={styles.aboutWelcome}>
			<Background imageName="bg-top" />
			<View style={styles.content}>
				<View style={styles.contentText}>
					<Text style={styles.title}>
						<Text style={styles.subTitle}>welcome to</Text> metatah
					</Text>
					<Text style={styles.description}>
						metatah is a productivity app for a woman to utilize
						time for her body and soul and then optimize it for
						eternity in her spirit
					</Text>
				</View>
				<View style={styles.buttonNext}>
					<Button
						title="next"
						buttonWidth={70}
						borderWidth={0}
						fontSize={20}
						lineHeight={24}
						type="primary"
						onPress={navigateToLearnScreen}
					/>
				</View>
				<Image
					source={require("../../../assets/img/woman-logo.png")}
					style={styles.logo}
					resizeMode="contain"
				/>
			</View>
		</View>
	);
}

export default AboutWelcomeScreen;
