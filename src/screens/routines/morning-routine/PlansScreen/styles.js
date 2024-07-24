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

  subtitle2: {
    color: Colors.ui_purple,
    fontSize: 22,
    fontWeight: '300',
  },

  answer: {
    color: Colors.ui_black,
    fontSize: 24,
  },
});
