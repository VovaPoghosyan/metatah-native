import { StyleSheet } from 'react-native';
import { Colors } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  containerBlock: {
    width: '100%',
    flex: 1,
    fontFamily: 'antipasto',
    paddingTop: 20,
    flexDirection: 'column',
  },

  title: {
    fontSize: 32,
    fontWeight: '600',
    color: Colors.ui_purple,
  },

  challengeTitle: {
    fontSize: 24,
    fontWeight: '400',
    color: Colors.ui_purple,
  },

  notes: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.ui_purple,
    width: '100%',
    marginTop: 24,
  },

  blockTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.ui_purple,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },

  scrollView: {
    width: '100%',
  },

  dates: {
    marginTop: 48,
  },

  dayBlock: {
    borderWidth: 1,
    borderColor: Colors.ui_purple,
    borderRadius: 3,
    backgroundColor: Colors.ui_light_gray_2,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  thoughtsTitle: {
    fontSize: 21,
    fontWeight: '500',
    color: Colors.ui_purple,
    marginBottom: 12,
  },

  thoughtBlock: {
    width: 200, 
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.ui_white,
    borderRadius: 8,
    marginBottom: 18,
  },

  thoughtBlockTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.ui_purple,
  },

  isChecked: {
    backgroundColor: Colors.ui_purple,
  },

  isNotChecked: {
    backgroundColor: Colors.ui_light_gray_2,
  },

  isCheckedTitle: {
    color: Colors.ui_light_gray_2,
  },

  next: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});