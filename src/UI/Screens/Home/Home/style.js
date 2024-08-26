import {
  font,
  color,
  hp,
  wp,
  wps,
  square,
  width,
  height,
  hps,
} from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: color.white
  },
  screenHeadingText: {
    marginTop: hp(10),
    alignSelf: 'center',
    textAlign: 'center',
  },
  screenSubHeadingText: {
    marginTop: hp(16),
    alignSelf: 'center',
    textAlign: 'center',
  },
  listFooter: {
    width: width,
    alignItems: 'center',
    paddingVertical: hp(10),
    backgroundColor: color.gold
  },
  listFooterText: {
    fontSize: hp(15),
    color: color.back,
    fontFamily: font.two.bold
  },
  errorMsgText: {
    marginTop: hp(40),
    fontSize: hp(15),
    color: color.error,
    fontFamily: font.two.bold
  },
  backToTopBlock: {
    flexDirection: 'row',
    borderTopLeftRadius: 60,
    borderBottomLeftRadius: 60,
    paddingRight: wp(24), paddingLeft: wp(10),
    paddingVertical: hp(19), position:
      'absolute', right: 0,
    bottom: hp(40),
    backgroundColor: color.gold,
  },
  backToTopBlockText: {
    color: color.black, marginLeft: wp(3), fontFamily: font.one.semiBold, fontSize: hp(15)
  },
});
