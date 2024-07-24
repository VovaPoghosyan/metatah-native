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
    zIndex: -1,
  },
});
