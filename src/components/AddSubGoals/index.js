import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from 'react';
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors } from '../../constants';
import { CheckBox } from "../CheckBox";
import globalStyles from "../../assets/globalStyles";

function AddSubGoals({ goals, onDone }) {
    const getIcon = (name) => {
        switch (name) {
            case 'low':
                return require('../../assets/img/priority/bookmark-low.png');
            case 'high':
                return require('../../assets/img/priority/bookmark-high.png');
            default:
                return require('../../assets/img/priority/bookmark-middle.png');
        }
    };
  
    return (
        <View style={styles.SubgoalSection}>
            <View style={styles.TitleContainer}>
                <Text style={styles.SubTitle}>Add subgoals or task</Text>
                <Text style={styles.Title}>What opportunites exist to help improve the lives of my loved ones?</Text>
            </View>

            <View>
                {goals.map((goal) => {
                    return <View key={goal.id} style={[globalStyles.row, globalStyles.jc_between, globalStyles.ai_center]}>
                        <View style={[globalStyles.row, globalStyles.ai_center, globalStyles.jc_start]}>
                            <CheckBox
                                onPress={() => onDone(goal.id)}
                                title={goal.time}
                                checkedColor={Colors.ui_green}
                                textColor={Colors.ui_light_purple}
                                isChecked={goal.done}
                                minWidth={0}
                                fontSize={16}
                                iconSize={22}
                            />
                            <Image source={getIcon(goal.priority)} style={styles.priority}/>
                            <Text style={styles.SubGoalTitle}>{goal.title}</Text>
                        </View>
                        <Pressable onPress={() => navigation.navigate('AddSubGoal')}>
                            {/* <MaterialCommunityIcons 
                                name={'chevron-right'}
                                size={30}
                                color={Colors.ui_purple}
                            /> */}
                        </Pressable>
                    </View>
                })}
            </View>

            <View style={styles.addGoal}>
                <Pressable onPress={() => navigation.navigate('AddSubGoal')}>
                    {/* <MaterialCommunityIcons 
                        name={'plus'}
                        size={45}
                        color={Colors.ui_yellow}
                    /> */}
                </Pressable>
            </View>
        </View>
    );
}
  
const styles = StyleSheet.create({
    SubgoalSection: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        paddingBottom: 40,
        borderWidth: 1,
        borderColor: Colors.ui_dark_yellow,
        borderRadius: 10,
        overflow: 'hidden',
        minHeight: 275,
        position: 'relative',
    },

    SubTitle: {
        color: Colors.ui_light_blue,
        fontSize: 10,
        fontWeight: '600',
    },

    Title: {
        color: Colors.ui_yellow,
        fontSize: 18,
        fontWeight: '600',
    },

    SubGoalItem: {

    },

    addGoal: {
        position: 'absolute',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        bottom: 10,
        right: 10,
    },

    priority: {
        marginHorizontal: 10,
    },

    SubGoalTitle: {
        fontSize: 18,
    }
});

export default AddSubGoals;