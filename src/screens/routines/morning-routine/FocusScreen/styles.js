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
  
  focuses: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  focusItem: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '33.33333%',
    paddingVertical: 12,
  },

  focusTitle: {
    fontSize: 14,
    color: Colors.ui_purple,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 12,
  },

  icon: {
    borderWidth: 2,
    borderColor:  'transparent',
    objectFit: 'contain',
    borderRadius: 8,
  },

  text: {
    fontSize: 42,
  },
});
