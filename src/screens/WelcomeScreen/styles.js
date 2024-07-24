import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontSize: 90,
    color: 'white',
    fontFamily: 'antipasto',
  },

  welcome_container: {
    width: 280,
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: -15,
  },
  
  welcome: {
    fontSize: 28,
    color: 'white',
    textAlign: 'right',
    fontFamily: 'antipasto',
  },

  description_container: {
    marginTop: 20,
    maxWidth: 310,
  },

  description_text: {
    fontSize: 24,
    color: 'white'
  },

  next: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
  },
});