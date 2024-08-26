// /* eslint-disable react-native/no-inline-styles */
// // Native Imports
// import React from 'react';
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
// } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // import {DeviceInfo} from 'src/Factory';

// //  Components import
// import {HeadTextTwo, SecondaryText, BodyText} from 'components';

// // Styles Import
// import {wp, hp, color, font, resize} from 'globalStyle';

// function ChatHeader({
//   screenName,
//   subtitleText,
//   hasBack,
//   onPressEndVisit,
//   onPress,
//   onPressNote,
//   onPressOrder,
// }) {
//   const imageEnd = require('assets/chat/end-visit.png');
//   const imageNotes = require('assets/chat/notes.png');
//   const imageOrders = require('assets/chat/order.png');
//   return (
//     <View style={styles.header}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           width: '20%',
//           justifyContent: 'space-between',
//         }}>
//         {hasBack ? (
//           <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
//             <Ionicons
//               name="chevron-back"
//               size={hp(25)}
//               color={color.basic}
//             />
//           </TouchableOpacity>
//         ) : null}
//         {/* <TouchableOpacity
//           onPress={onPressEndVisit}
//           style={styles.iconContainer}>
//           <Image source={imageEnd} style={styles.endVisitIcon} />
//         </TouchableOpacity> */}
//       </View>
//       <View style={styles.headContainer}>
//         <BodyText style={styles.titleName} numberOfLines={1}>
//           {screenName}
//         </BodyText>
//         <View>
//           {subtitleText ? <SecondaryText>{subtitleText}</SecondaryText> : null}
//         </View>
//       </View>
//       {/* <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           width: '20%',
//         }}>
//         <TouchableOpacity onPress={onPressOrder} style={styles.iconContainer}>
//           <Image source={imageOrders} style={styles.icon} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPressNote} style={styles.iconContainer}>
//           <Image source={imageNotes} style={styles.icon} />
//         </TouchableOpacity>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     marginTop: hp(20),
//     paddingHorizontal: wp(15),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // borderBottomWidth: 1,
//     // borderBottomColor: color.white,
//     // elevation: 1,
//     backgroundColor: color.white,
//     height: hp(50),
//   },
//   iconContainer: {
//     // width: wp(Dimensions.get('screen').width / 12),
//     height: hp(30),
//     alignItems: 'center',
//     justifyContent: 'center',
//     // marginHorizontal: wp(3),
//     // paddingHorizontal: wp(5),
//   },
//   headContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: wp(5),
//     width: '60%',
//   },
//   endVisitIcon: {
//     width: wp(25),
//     height: hp(22),
//     borderRadius: hp(30 / 2),
//   },
//   icon: {
//     width: wp(20),
//     height: hp(22),
//     // borderRadius: hp(30 / 2),
//   },
//   titleName: {
//     fontFamily: font.one.bold,
//   },
// });

// export {ChatHeader};
