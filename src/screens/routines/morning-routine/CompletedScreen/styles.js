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

  image: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: -18,
    zIndex: -1
  },

  title: {
    fontSize: 24,
    fontWeight: '300',
    color: Colors.ui_purple,
  },

  titleBold: {
    fontSize: 38,
    fontWeight: 500,
    color: Colors.ui_purple
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 400,
    color: Colors.ui_white,
    marginTop: -280,
  }
});
