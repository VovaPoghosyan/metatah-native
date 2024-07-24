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

  feelings: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  feelingItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '25%',
    paddingVertical: 12,
  },

  feelingTitle: {
    fontSize: 14,
    color: Colors.ui_purple,
  },

  icon: {
    borderWidth: 1.5,
    borderColor:  'transparent',
    borderRadius: 200,
  },
});
