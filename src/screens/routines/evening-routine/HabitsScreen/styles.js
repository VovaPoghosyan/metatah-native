import { StyleSheet } from 'react-native';
import { Colors } from "../../../../constants";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 30,
    paddingHorizontal: 20,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  checkboxItem: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: 0
  },

  checkboxLabel: {
    flexDirection: 'row',
  },

  labelText: {
    fontSize: 18,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  checkboxImage: {
    width: 24,
    marginRight: 10,
    marginLeft: 4,
    objectFit: 'contain'
  },
});
