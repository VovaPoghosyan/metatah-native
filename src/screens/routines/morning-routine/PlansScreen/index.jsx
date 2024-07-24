import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const PlansScreen = () => {
	// useNavigation
	const navigation = useNavigation();

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title
						subtitle="based on your focus"
						title="what are your plans"
						Subtitle2={
							<Text style={styles.subtitle2}>
								for{" "}
								<Text style={{ fontWeight: "bold" }}>
									today
								</Text>
							</Text>
						}
					/>
					<Input
						style={styles.answer}
						placeholder="I will do… because it will…"
						inputContainerStyle={{
							borderBottomWidth: 0,
							marginLeft: -10,
						}}
						placeholderTextColor={Colors.ui_white}
					/>
				</View>
				<Next
					title="next >"
					onPress={() =>
						navigation.navigate("MorningRoutineGrateful")
					}
				/>
			</View>
		</View>
	);
};

export default PlansScreen;
