import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Input } from "react-native-elements";
import { Colors } from "../../../../constants";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";
import AskQuestion from "../../components/AskQuestion";
import { useNavigation } from "@react-navigation/native";

const GratefulScreen = () => {
	// useState
	const [selectedVariant, setSelectedVariant] = useState(null);
	const [thingsGratefulFor, setThingsGratefulFor] = useState({
		1: "",
		2: "",
		3: "",
	});

	// useNavigation
	const navigation = useNavigation();

	// functions
	const handleVariantSelect = (variant) => {
		setSelectedVariant(variant);
	};

	const handleChangeThing = (value, key) => {
		setThingsGratefulFor({ ...thingsGratefulFor, [key]: value });
	};

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title
						CustomTitle={
							<View>
								<Text style={styles.subtitle}>
									list{" "}
									<Text
										style={{
											fontSize: 38,
											fontWeight: 500,
										}}>
										3 thing
									</Text>
								</Text>
								<Text style={styles.title}>
									you are{" "}
									<Text
										style={{
											fontSize: 38,
											fontWeight: 500,
										}}>
										grateful for
									</Text>
								</Text>
							</View>
						}
					/>
					{Object.keys(thingsGratefulFor).map((key) => (
						<View
							style={styles.thingItem}
							key={key}>
							<Text style={styles.listNumber}>{key}|</Text>
							<Input
								value={thingsGratefulFor[key]}
								onChangeText={(value) =>
									handleChangeThing(value, key)
								}
								style={styles.answer}
								placeholder="add text …"
								inputContainerStyle={{ borderBottomWidth: 0 }}
								placeholderTextColor={Colors.ui_white}
							/>
						</View>
					))}
					<AskQuestion onSelectVariant={handleVariantSelect} />
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("MorningRoutineGoals")}
				/>
			</View>
		</View>
	);
};

export default GratefulScreen;
