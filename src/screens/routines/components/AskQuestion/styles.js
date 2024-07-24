import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants';

export const styles = StyleSheet.create({
  askQuestion: {
    marginTop: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 600,
    color: Colors.ui_purple,
    marginBottom: 12,
  },

  variants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  variantButton: {
    borderWidth: 1,
    borderColor: Colors.ui_dark_purple,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '48%',
    margin: 3,
    borderRadius: 3,
    borderBottomRightRadius: 10,
  },

  selectedVariant: {
    backgroundColor: Colors.ui_white,
    borderWidth: 2,
    paddingVertical: 3,
  },

  variantTitle: {
    fontSize: 18,
    color: Colors.ui_purple,
  },

  selectedVariantTitle: {
    fontWeight: 600,
  }
});
