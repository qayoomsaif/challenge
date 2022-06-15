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
  hps,
} from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  screenHeadingText: {
    marginTop: hp(32),
    alignSelf: 'center',
    textAlign: 'center',
  },
  screenSubHeadingText: {
    marginTop: hp(16),
    alignSelf: 'center',
    textAlign: 'center',

  },
  subBlock: {
    flex: 1,
    alignItems: 'center',
  },
  bottonMsgBlcok: {
    alignSelf: 'center',
    marginBottom: hp(16),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  },
  bottonMsgText: {
    fontFamily: font.one.regular,
    color: color.textLight,
    fontSize: hp(12),
    marginLeft: wp(6),
  },
  bottomBlock: {
    position: 'absolute',
    bottom: 0,
  },
  activeBtn: {
    marginBottom: hp(0)
  },
  iconBlock: {
    marginTop: hp(100)
    // marginBottom: hp(56)
  },
});
