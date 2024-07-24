import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import Background from "../../../components/Background";
import globalStyles from "../../../assets/globalStyles";

const AboutLearnScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	// useState
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<View style={globalStyles.containerFluid}>
			<Background />
			<View style={globalStyles.container}>
				<ScrollView
					contentContainerStyle={expanded ? {} : styles.aboutContent}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>
							learn <Text style={globalStyles.bold}>about </Text>{" "}
							us
						</Text>
					</View>
					<View style={styles.descriptionContainer}>
						<Text
							style={styles.descriptionText}
							numberOfLines={expanded ? undefined : 12}>
							what is the driving force
							<Text style={globalStyles.bold}>
								behind asking all questions and giving all
								answers?
							</Text>
							{"\n"}
							it is
							<Text style={styles.categoryName}>
								{" "}
								the desire to know.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind loving and being loved?
							</Text>
							{"\n"}
							it is
							<Text style={styles.categoryName}>
								{" "}
								the desire to love.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							{"\n"}
							it is
							<Text style={styles.categoryName}>
								{" "}
								the desire to live forever.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
							{"\n"}
							{"\n"}
							what is the driving force
							<Text style={globalStyles.bold}>
								behind wanting to never die?
							</Text>
							<Text style={styles.categoryName}>
								the desire to live forever.
							</Text>
						</Text>
					</View>
					<View style={styles.readMoreContainer}>
						<TouchableOpacity
							style={styles.readMoreTouchable}
							onPress={toggleExpanded}>
							<Text style={styles.readMoreText}>
								{expanded ? "read less" : "read more"}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>

				<TouchableOpacity
					style={styles.next}
					onPress={() => navigation.navigate("Routines")}>
					<Text style={globalStyles.text}>next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AboutLearnScreen;
