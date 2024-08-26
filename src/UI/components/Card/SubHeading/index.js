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
import gStyle from '../../gStyle'
import AntDesign from 'react-native-vector-icons/AntDesign'
export function SubHeading({
    text,
    style,
    ...props
}) {
    return (
        text ?
            <Text style={[gStyle.subHeadingText, { alignItems: 'flex-start' }, style && style]}>
                {text}
            </Text> : null
    )
}
SubHeading.defaultProps = {
    text: '',
    style: {},
}
