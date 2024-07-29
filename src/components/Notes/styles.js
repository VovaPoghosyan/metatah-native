import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: Colors.ui_purple,
      borderRadius: 3,
      paddingVertical: 10,
  },

  title: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: Colors.ui_gray_2,
      flexDirection: 'row',
      alignItems: 'center'
  },

  titleLabel: {   
      color: Colors.ui_dark_gray,
      fontSize: 14,
      fontWeight: '500',
      marginRight: 5,
  },
  
  titleValue: {
      fontSize: 16,
      color: Colors.ui_purple,
      fontWeight: '600',
  },

  content: {
      padding: 10,
  },

  input: {
      width: '100%',
      minHeight: 80,
      maxHeight: 120,
      textAlignVertical: 'top',
      fontSize: 16,
      color: Colors.ui_darker_purple,
  },

  inputTitle: {
      width: '100%',
      color: Colors.ui_purple,
      fontSize: 18,
      fontWeight: '500',
  },
});