import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Colors } from "../../constants";
import { Icon } from "react-native-elements";
import { styles } from "./styles";
import globalStyles from "../../assets/globalStyles";
  
function SelectPriority({ activeItem, onChange }) {
    const [priorityActive, setPriorityActive] = useState(false);

    const items = {
        low: 'low',
        medium: 'medium',
        high: 'high',
    };

    const onPriorityToggle = () => {
        setPriorityActive(!priorityActive);
    };

    const onSelect = (item) => {
        setPriorityActive(false);

        onChange(item);
    };
    
    return (
        <View style={styles.prioritySection} >
            <TouchableOpacity onPress={onPriorityToggle} style={styles.priorityLabel}>
                <Text style={styles.selectedtText}>{ activeItem ? items[activeItem] : 'priority' }</Text>
                <View style={[globalStyles.row, globalStyles.ai_center]}>
                    <Image style={styles.priorityIcon} source={require('../../assets/icon/priority-flag.png')}/>
                    <Icon
                        name='keyboard-arrow-down'
                        type='material'
                        size={25}
                        color={Colors.ui_purple}
                    />
                </View>
            </TouchableOpacity>
            {priorityActive && (
                <View style={styles.priorityContent}>
                    {Object.entries(items).map(([key, value]) => {
                        return (
                            <View key={key}>
                                <TouchableOpacity
                                    onPress={() => onSelect(key)}
                                    key={key}
                                    style={styles.priorityItems}
                                >
                                    <Text style={styles.priorityText}>{value}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            )}
        </View>
    );
}

export default SelectPriority;