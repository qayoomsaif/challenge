import React, { useState } from 'react';
import {
  Image,
  View,
  ActivityIndicator,
} from 'react-native';

import FastImage from 'react-native-fast-image'
import { color } from '../../../GlobalStyle/color';

export function LoadingBar({ isImage, transparent }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        alignItems: 'center',
        backgroundColor: transparent ? "transparent" : 'rgba(0,0,0,0.4)',
        width: '100%'
      }}>
      {isImage ? <FastImage source={require('assets/Icon/CircleIt_Logo_Gold_Loading.gif')}
        resizeMode='contain'
        style={{ height: 100, width: 100 }} />
        : <ActivityIndicator size="large" />}
    </View>
  );
}
LoadingBar.defaultProps = {
  isImage: false,
  transparent: true,
  barColor: color.gold
}
