import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants';

export const styles = StyleSheet.create({
  next: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '100%',
  },

  textNext: {
    fontSize: 24,
    color: Colors.ui_white,
  }
});
