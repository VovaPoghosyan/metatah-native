import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'antipasto',
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});