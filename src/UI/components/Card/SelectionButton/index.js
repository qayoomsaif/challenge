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


export function SelectionButton({
    onPress,
    disabled,
    value,
    isErr,
    placeholder,
    textStyle,
    style,
    numberOfLines,
    multiline,
    ...props
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, style && style, isErr && { borderColor: color.app }]}>
            <Text
                style={[styles.inputBlock, textStyle, !value && { color: color.textLight }]}
                value={value}
                multiline={multiline}
                numberOfLines={numberOfLines}
            >
                {value ? value : placeholder}
            </Text>
        </TouchableOpacity >
    )
}

SelectionButton.defaultProps = {
    onPress: () => { },
    disabled: false,
    value: 'as',
    isErr: false,
    multiline: false,
    numberOfLines: 1,
    placeholder: '',
    textStyle: {},
    style: {},
}
