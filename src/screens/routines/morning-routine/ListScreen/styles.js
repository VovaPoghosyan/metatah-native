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

  title: {
    fontSize: 36,
    fontWeight: 600,
    color: Colors.ui_purple,
  },

  subtitle: {
    fontSize: 24,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  list: {
    marginTop: 16,
  },

  checkboxItem: {
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    padding: 0,
    marginLeft: 0
  },

  checkboxLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  labelText: {
    fontSize: 20,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  checkboxImage: {
    width: 32,
    marginRight: 10,
    objectFit: 'contain'
  },
});
