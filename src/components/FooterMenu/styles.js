import { StyleSheet } from 'react-native';
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    height: 70,
  },

  menuItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: 70,
  },

  menuItemTitle: {
    fontSize: 14,
    color: Colors.ui_white,
  },

  image: {
    width: 28,
    height: 28,
  }
});