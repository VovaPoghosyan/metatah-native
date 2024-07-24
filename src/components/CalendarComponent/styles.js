import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
      calendarSection: {
        width: '100%',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.ui_purple,
        borderRadius: 3,
    },

    calendarLabel: {
        padding: 12,
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    calendarBlock: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },

    date: {
      width: '45%',
      fontSize: 16,
      color: Colors.ui_purple,
    },

    calendarIcon: {
      width: '10%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})