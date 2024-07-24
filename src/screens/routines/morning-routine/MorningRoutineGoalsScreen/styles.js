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

  goal: {
    height: 40,
  },

  title1: {
    fontSize: 24,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  title2: {
    fontSize: 24,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  title3: {
    fontSize: 32,
    fontWeight: 600,
    color: Colors.ui_purple,
  },

  listNumber: {
    fontSize: 24,
    color: Colors.ui_purple,
    fontWeight: 500,
    textAlignVertical: 'center',
    position: 'absolute',
    top: 6,
  },

  answer: {
    fontSize: 24,
    color: Colors.ui_purple,
    textAlignVertical: 'center',
    marginLeft: 16,
  },
});
