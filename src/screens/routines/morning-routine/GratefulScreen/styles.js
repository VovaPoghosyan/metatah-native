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
    color: Colors.ui_purple,
    fontSize: 24,
    fontWeight: '300',
  },

  subtitle: {
    color: Colors.ui_purple,
    fontSize: 24,
    fontWeight: '400',
  },

  thingItem: {
    height: 40,
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
    marginLeft: 12,
  },
});
