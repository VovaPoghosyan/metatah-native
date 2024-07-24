import React, { useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { feelings } from "../../../../constants";
import { styles } from "./styles";
import { Icon } from "../../../../components/Icon";
import { Colors } from "../../../../constants";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const FeelScreen = () => {
	// useState
	const [activeFeeling, setActiveFeeling] = useState("");

	// useNavigation
	const navigation = useNavigation();

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<View>
					<Title title="how do you feel?" />
					<View style={styles.feelings}>
						{feelings.map((item) => (
							<View
								style={styles.feelingItem}
								key={item.id}>
								<Icon
									name={item.iconName}
									width={80}
									paddingHorizontal={0}
									paddingVertical={0}
									onPress={() => setActiveFeeling(item.title)}
									style={{
										...styles.icon,
										borderColor:
											activeFeeling === item.title
												? Colors.ui_purple
												: "transparent",
									}}
								/>
								<Text style={styles.feelingTitle}>
									{item.title}
								</Text>
							</View>
						))}
					</View>
				</View>
				<Next
					title="next >"
					onPress={() => navigation.navigate("MorningRoutineSleep")}
				/>
			</View>
		</View>
	);
};

export default FeelScreen;
