import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import globalStyles from "../../../assets/globalStyles";
import Background from "../../../components/Background";
import FooterMenu from "../../../components/FooterMenu";

const ChallengeScreenThree = () => {
	// useNavigation
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Background />
			<View style={styles.containerBlock}>
				<Text style={styles.title}>congratulations</Text>
				<View style={styles.subtitle}>
					<Text style={styles.subtitleText}>you have </Text>
					<Text
						style={{
							...styles.subtitleText,
							fontSize: 32,
							lineHeight: 32,
						}}>
						successfully
					</Text>
					<Text
						style={{
							...styles.subtitleText,
							fontSize: 24,
							lineHeight: 24,
						}}>
						completed the challenge
					</Text>
				</View>
				<Text style={styles.description}>
					{`keep going\nyou make the world better`}
				</Text>
			</View>

			<TouchableOpacity
				style={styles.next}
				onPress={() => navigation.navigate("Login")}>
				<Text style={globalStyles.text}>done</Text>
			</TouchableOpacity>
			<FooterMenu />
		</View>
	);
};

export default ChallengeScreenThree;
