import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Modal, Keyboard } from 'react-native'
import {
  font,
  color,
  hp,
  wp,
  wps,
  square,
  width,
  height,
} from 'globalStyle'
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Router } from 'Factory'
export function Header({
  style,
  backstyle,
  iconColor,
  iconSize,
  onPress,
  disabled,
  ...props
}) {
  return (
    <View
      style={[styles.container, style && style]}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => onPress ? onPress() : Router.back()}
        style={[styles.backBlock, backstyle && backstyle]}>
        <AntDesign
          name='arrowleft'
          size={iconSize ? iconSize : hp(30)}
          color={iconColor ? iconColor : color.black}
        />
      </TouchableOpacity>
    </View >
  )
}

Header.defaultProps = {
  disabled: false,
  iconColor: null,
  iconSize: null,
  style: {},
  backstyle: {},
  onPress: null,
}
