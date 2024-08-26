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
    marginVertical: hp(10),
    alignSelf: 'center',
  },
  checkBock: {
    marginRight: wp(18)
  },
  image: {
    borderRadius: hp(10),
    backgroundColor: color.bg,

    width: wps(32),
    height: wps(32),
  },
  userImage: {
    backgroundColor: color.bg,
    borderRadius: hp(25),
    width: hp(50),
    height: hp(50),
  },
  text: {
    color: color.black,
    fontFamily: font.one.bold,
    fontSize: hp(14,),
    letterSpacing: 0.03
  },
  titleText: {
    color: color.balck,
    fontFamily: font.one.regular,
    fontSize: hp(17,),
    marginVertical: hp(10)
  },
  userNameText: {
    color: color.black,
    fontFamily: font.two.bold,
    fontSize: hp(14,),
    letterSpacing: 0.24
  },
  dateText: {
    color: color.textLight,
    fontFamily: font.two.regular,
    fontSize: hp(14,),
    letterSpacing: 0.77
  },
  userInfoBlock: {
    flex: 1,
    marginHorizontal: wp(10)
  },
  userBlock: {
    marginBottom: hp(10),
    flexDirection: 'row',
    alignItems: 'center'
  },
});
