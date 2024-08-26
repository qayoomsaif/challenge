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
    paddingVertical: hp(17),
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent:'space-between'
    // backgroundColor: color.activeBtn,
    // marginVertical: hp(13),

  },
  checkBock: {
    marginRight: wp(18)
  },
  text: {
    textAlignVertical: 'center',
    color: color.black,
    fontFamily: font.one.bold,
    fontSize: hp(16,),
    letterSpacing: 0.03
  },
});
