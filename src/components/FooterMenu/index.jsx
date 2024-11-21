import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const FooterMenu = ({ currentRoute }) => {
	const navigation = useNavigation();

	const menuItems = [
		{
			key: "goals",
			title: "goals",
			imageSrc: require("../../assets/icon/goals.png"),
			navigatePageSrc: "Goals",
		},
		{
			key: "todos",
			title: "todos",
			imageSrc: require("../../assets/icon/todoes.png"),
			navigatePageSrc: "Todo",
		},
		{
			key: "calendar",
			title: "calendar",
			imageSrc: require("../../assets/icon/calendar-white.png"),
			navigatePageSrc: "Calendar",
		},
		{
			key: "notes",
			title: "notes",
			imageSrc: require("../../assets/icon/notes.png"),
			navigatePageSrc: "Notes",
		},
		{
			key: "analytics",
			title: "analytics",
			imageSrc: require("../../assets/icon/sun-1.png"),
			navigatePageSrc: "Analytics",
		},
	];

	return (
		<View style={styles.footerMenu}>
			<View style={styles.container}>
				{menuItems.map((item) => (
					<TouchableOpacity
						key={item.key}
						style={styles.menuItem}
						onPress={() =>
							navigation.navigate(item.navigatePageSrc)
						}>
						<Image
							style={styles.image}
							source={item.imageSrc}
							resizeMode="contain"
						/>
						<Text style={styles.menuItemTitle}>{item.title}</Text>
						{currentRoute === item.navigatePageSrc && (
							<Text style={styles.dot}>•</Text>
						)}
					</TouchableOpacity>
				))}
			</View>
		</View>
	);
};

export default FooterMenu;
