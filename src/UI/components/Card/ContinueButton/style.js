import {
  font,
  resize,
  color,
  hp,
  wp,
  wps,
  square,
  width,
  height,
} from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    width: wps(32),
    height: hp(56),
    borderRadius: hp(28),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: color.activeBtn,
    // marginVertical: hp(13),

  },
  text: {
    textAlignVertical: 'center',
    color: color.black,
    fontFamily: font.one.bold,
    fontSize: hp(16, 0.5),
    letterSpacing: 0.05
  },
});
