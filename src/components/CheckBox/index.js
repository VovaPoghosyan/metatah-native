import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Fonts } from '../../constants';
  
export class CheckBox extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
        const {
            isChecked,
            onPress,
            title,
            fontSize,
            iconSize,
            checkedColor,
            textColor,
            minWidth
        } = this.props;

        const iconName = isChecked ?
        "checkbox-marked" : "checkbox-blank-outline";

        const color = isChecked ?
        checkedColor : textColor;
  
        return (
            <View style={[styles.Container, {minWidth}]}>
                <Pressable onPress={onPress}>
                    {/* <MaterialCommunityIcons 
                        name={iconName}
                        size={iconSize}
                        color={color}
                    /> */}
                </Pressable>
                <Text style={[
                    styles.Title,
                    { fontSize, color: textColor }
                ]}>
                    {title}
                </Text>
            </View>
        );
    }
}

CheckBox.defaultProps = {
    textColor: Colors.ui_white,
    minWidth: 150,
};
  
const styles = StyleSheet.create({
    Container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 5,
    },

    Title: {
        fontFamily: Fonts.poppins,
        color: Colors.ui_white,
        marginLeft: 5,
        marginTop: 2,
        fontWeight: "600",
    },
});