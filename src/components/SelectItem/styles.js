import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    
    containerItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: -3,
    },

    itemContainer: {
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 8,
        marginHorizontal: 3,
    },

    title: {
        color: Colors.ui_dark_purple,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 12,
    },
});