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
    marginVertical: hp(10),
    width: wps(32),
    borderRadius: hp(5),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: color.borderColor,
  },
  inputBlock: (isIcon) => ({
    width: isIcon ? wps(120) : wps(32),
    height: hp(48),
    fontSize: hp(17, 0.4),
    fontFamily: font.one.regular,
    color: color.textDark,
    alignSelf: 'center',
  }),
  subBlock: (isErr) => ({
    borderRadius: hp(4),
    width: wps(32),
    // backgroundColor: '#000000',
    height: hp(48),
    alignSelf: 'center',
  }),
  subBlock1: (isErr) => ({
    borderRadius: hp(10),
    width: wps(32),
    height: hp(48),
    paddingHorizontal: wp(13),
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center'
  }),
  iconBlock: {
    // height: hp(40),
    // width: wp(30),
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: wp(16),
  },
  titleText: {
    color: color.black,
    fontSize: hp(15, 0.4),
    fontFamily: font.one.semiBold,
    alignSelf: 'flex-start',
    // color: color.blockHeading,
    marginBottom: hp(6),
    marginLeft: wp(6),
    lineHeight: hp(22),
  },
  icon: {
    width: wp(20),
    height: wp(20),
  },
});
