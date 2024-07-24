import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants';

export const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 12,
  },

  lines: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 8,
  },

  line: {
    width: 40,
    height: 1.5,
    backgroundColor: Colors.ui_purple,
  },
  
  title: {
    color: Colors.ui_purple,
    fontSize: 36,
    fontWeight: 500,
  },

  subtitle: {
    color: Colors.ui_purple,
    fontSize: 22,
    fontWeight: '300',
  },

  description: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 12,
  },

  descriptionText: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: Colors.ui_purple,
    fontSize: 16,
    letterSpacing: 0.2,
    textTransform: 'lowercase',
    padding: 6,
  }
});
