import { StyleSheet } from 'react-native';
import { Colors, Fonts, Window } from '../../constants';

export const styles = StyleSheet.create({
  linesContainer: {
    flex:1,
    flexDirection: 'row'
  },

  TitleContainer: {
    paddingVertical: 10,
  },

  Title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: Colors.ui_purple,
    fontFamily: Fonts.antipasto,
  },

  SecondTitle: {
    fontSize: 35,
    color: Colors.ui_purple,
    fontFamily: Fonts.antipasto,
    marginTop: -10,
  },

  ButtonContainer: {
    paddingVertical: 16,
    marginTop: 50,
  },

  UploadContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  IconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,

  },

  IconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },

  iconTitle: {
    color: Colors.ui_purple,
    fontSize: 25,
    marginLeft: 5,
  },

  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  absoluteFill: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  captureButtonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 10,
    left: Window.width / 2 - 30,
  },

  captureButton: {
    width: 60,
    height: 60,
    borderWidth: 4,
    borderRadius: 50,
    borderColor: Colors.ui_light_gray,
  },

  capturedImage: {
    width: '99%',
    height: '99%',
    borderRadius: 500,
    aspectRatio: 1,
    top: '1%',
    left: '1%',
  },
});