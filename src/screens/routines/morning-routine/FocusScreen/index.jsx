import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { focuses } from "../../../../constants";
import { styles } from "./styles";
import { Icon } from "../../../../components/Icon";
import { Colors } from "../../../../constants";
import { useNavigation } from "@react-navigation/native";
import Background from "../../../../components/Background";
import Title from "../../components/Title";
import Next from "../../components/Next";

const FocusScreen = () => {
	// useState
	const [activeFocus, setActiveFocus] = useState("");

	// useNavigation
	const navigation = useNavigation();

	return (
		<View>
			<Background imageName="mr-bg" />
			<View style={styles.container}>
				<Title
					subtitle="what is your main"
					title="focus for today?"
				/>
				<ScrollView>
					<View style={styles.focuses}>
						{focuses.map((item) => (
							<View
								style={styles.focusItem}
								key={item.id}>
								<Icon
									name={item.iconName}
									width={50}
									paddingHorizontal={0}
									paddingVertical={0}
									onPress={() =>
										setActiveFocus(item.iconName)
									}
									style={{
										...styles.icon,
										height: 60,
										shadowColor: Colors.ui_purple,
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity:
											activeFocus === item.iconName
												? 0.5
												: 0,
										shadowRadius: 3.5,
										elevation: 5,
									}}
								/>
								<Text style={styles.focusTitle}>
									{item.title}
								</Text>
							</View>
						))}
					</View>
				</ScrollView>
				<Next
					title="next >"
					onPress={() =>
						navigation.navigate("MorningRoutineStartDoing")
					}
				/>
			</View>
		</View>
	);
};

export default FocusScreen;
