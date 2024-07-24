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

  textBlock: {
    paddingRight: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: 300,
    color: Colors.ui_purple,
  },

  readMoreLess: {
    fontSize: 16,
    fontWeight: 300,
    color: Colors.ui_white,
    alignSelf: 'flex-end',
    marginTop: 48,
  },
});
