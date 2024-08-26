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
} from "globalStyle";

export default styles = {
  header: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    width: width,
  },
  headerTextContainer: {
    width: "60%",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
  },
  backButton: {
    paddingHorizontal: wp(10),
    paddingVertical: hp(10),
  },
  headerText: {
    fontSize: hp(14),
    fontFamily: font.two.bold,
    color: color.textDark,
    alignSelf: "center",
  },
  optionBlockContainer: {
    width: "20%",
  },
  optionBlock: {
    marginRight: wp(20),
    borderRadius: wp(25),
    paddingVertical: hp(5),
    backgroundColor: color.app,
  },
  optionText: {
    fontSize: hp(10),
    fontFamily: font.one.bold,
    alignSelf: "center",
    color: "#FFF",
  },
  backIcon: hp(30),
};
