import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import globalStyles from "../../assets/globalStyles";
import { styles } from "./styles";

function SelectItem(props) {
	const {
		items,
		activeItem,
		activeItems,
		onPress,
		title,
		textSize,
		color,
		activeTextColor,
		containerStyle,
		itemStyle,
		multiple,
	} = props;

	return (
		<View style={styles.container}>
			{title && <Text style={styles.title}>{title}</Text>}
			<View style={[styles.containerItems, containerStyle]}>
				{Object.entries(items).map(([key, value]) => {
					const isActive = multiple
						? activeItems?.includes(key)
						: activeItem === key;

					return (
						<TouchableOpacity
							key={key}
							onPress={() => onPress && onPress(key)}
							style={[
								styles.itemContainer,
								containerStyle,
								{
									borderColor: isActive
										? "transparent"
										: color,
									backgroundColor: isActive
										? color
										: "transparent",
								},
							]}>
							<View
								style={[
									globalStyles.row,
									globalStyles.jc_center,
									itemStyle,
								]}>
								<Text
									style={{
										fontSize: textSize,
										color: isActive
											? activeTextColor
											: color,
									}}>
									{value}
								</Text>
							</View>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}

export default SelectItem;
