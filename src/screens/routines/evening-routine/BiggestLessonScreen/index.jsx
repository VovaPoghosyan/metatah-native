import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const BiggestLesson = () => {
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
						subtitle="what was the"
						title="biggest lesson"
						Subtitle2={
							<Text style={styles.subtitle2}>
								you learned today
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
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("EveningRoutineSuccess")}
				/>
			</View>
		</View>
	);
};

export default BiggestLesson;
