import React from "react";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { Dropdown } from "react-native-element-dropdown";
import { Colors } from "../../constants";

function Select({ data, placeholder, value, onChange }) {
	return (
		<Dropdown
			style={styles.roleSection}
			placeholderStyle={[styles.selectedtText, { opacity: 0.3 }]}
			selectedTextStyle={styles.selectedtText}
			data={data}
			itemTextStyle={styles.itemText}
			maxHeight={300}
			labelField="label"
			valueField="value"
			placeholder={placeholder}
			value={value}
			onChange={(item) => onChange(item.value)}
			renderRightIcon={() => (
				<Icon
					name="keyboard-arrow-down"
					type="material"
					size={25}
					color={Colors.ui_purple}
				/>
			)}
		/>
	);
}

export default Select;
