import { StyleSheet } from "react-native";
import { Colors } from "../../constants";

export const styles = StyleSheet.create({
  containerFluid: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  textContent: {
    paddingBottom: 10,
  },

  title: {
    fontSize: 34,
    fontWeight: '500',
    color: Colors.ui_white,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.ui_white,
  },

  next: {
    marginTop: 32,
  },

  textNext: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.ui_white,
  },
});