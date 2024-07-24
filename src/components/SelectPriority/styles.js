import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
    prioritySection: {
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: Colors.ui_purple,
        borderRadius: 3,
        overflow: 'hidden',
    },

    priorityLabel: {
        padding: 12,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    priorityContent: {
        paddingHorizontal: 12,
    },

    priorityItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },

    selectedtText: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.ui_purple,
    },

    priorityIcon: {
        width: 18,
        height: 18,
        objectFit: 'contain'
    },

    priorityText: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.ui_purple,
    },
});