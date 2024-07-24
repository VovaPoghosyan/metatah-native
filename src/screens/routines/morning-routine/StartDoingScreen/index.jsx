import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";
import AskQuestion from "../../components/AskQuestion";

const StartDoingScreen = () => {
	// useState
	const [selectedVariant, setSelectedVariant] = useState(null);

	// useNavigation
	const navigation = useNavigation();

	// functions
	const handleVariantSelect = (variant) => {
		setSelectedVariant(variant);
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title
						subtitle="what shall I"
						title="start/stop doing"
						Subtitle2={
							<Text style={styles.subtitle2}>
								to help{" "}
								<Text style={{ fontWeight: "bold" }}>
									deepen my relationships
								</Text>{" "}
								with friends and loved ones?
							</Text>
						}
					/>
					<Input
						style={styles.answer}
						placeholder="add your answer …"
						inputContainerStyle={{
							borderBottomWidth: 0,
							marginLeft: -10,
						}}
						placeholderTextColor={Colors.ui_white}
					/>
					<AskQuestion onSelectVariant={handleVariantSelect} />
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("MorningRoutinePlans")}
				/>
			</View>
		</View>
	);
};

export default StartDoingScreen;
