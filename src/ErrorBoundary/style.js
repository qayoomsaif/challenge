import { font, hp, wp, color } from 'globalStyle';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
  tryagaincontainer: {
    marginTop: hp(32),
    width: wp(179),
    height: hp(44),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp(30),
    backgroundColor: color.gold,
  },
  retrytext: {
    fontFamily: font.one.semiBold,
    color: color.balck,
    fontSize: hp(16),
    paddingBottom: hp(3),
  },
})
