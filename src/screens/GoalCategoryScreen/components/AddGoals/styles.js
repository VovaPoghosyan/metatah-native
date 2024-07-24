import { StyleSheet } from "react-native";
import { Colors } from "../../../../../constants";

export const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 47,
    },

    title: {
        fontSize: 24,
        color: Colors.ui_purple,
        paddingLeft: 10,
        marginBottom: 10,
    },

    goalSection: {
        paddingHorizontal: 15,
        paddingVertical: 18,
        paddingBottom: 24,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        overflow: 'hidden',
    },

    goalTypeContent: {
        maxWidth: 300,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: 5,
        borderRadius: 3,
    },

    desireItem: {
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'flex-start',
    },

    goalTypeItem: {
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: -5,
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 12,
    },
});