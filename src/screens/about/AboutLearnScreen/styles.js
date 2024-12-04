import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  aboutContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleContainer: {
    width: '100%',
  },

  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: 700,
    fontFamily: 'Mardoto-Bold',
  },

  descriptionContainer: {
    marginVertical: 20,
  },

  descriptionText: {
    fontSize: 22,
    color: 'white'
  },

  categoryName: {
    fontSize: 26,
    fontWeight:'700',
  },

  readMoreContainer: {
    width: '100%',
    marginBottom: 60,
  },

  readMoreTouchable: {
    width: '100%',
  },

  readMoreText: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end',
  },

  next: {
    position: 'absolute',
    bottom: 20,
    color: 'white',
  },
});