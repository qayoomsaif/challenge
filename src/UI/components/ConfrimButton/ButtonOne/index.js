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
export function ButtonOne({
    style,
    text,
    textStyle,
    onPress,
    isActive,
    disabled,
    ...props
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[gStyle.activeBtn(isActive), style && style]}>
            <Text style={[gStyle.activeBtnText(isActive), textStyle && textStyle]}>
                {text}
            </Text>

        </TouchableOpacity>
    )
}

ButtonOne.defaultProps = {
    disabled: false,
    text: 'Continue',
    style: {},
    textStyle: {},
    onPress: () => { },
    isActive: true,
}
