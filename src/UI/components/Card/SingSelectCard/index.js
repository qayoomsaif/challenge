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
import { LeftArrow, UnselectedCheckBox } from 'SVG'

export function SingSelectCard({
    onPress,
    isSelected,
    disabled,
    item,
    ...props
}) {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={() => onPress(item)}
            style={[styles.container]}>
            <Text style={[styles.text]}>
                {item}
            </Text>
            {/* <View style={styles.checkBock} > */}
            <LeftArrow width={hp(15)} height={hp(15)} />
            {/* </View> */}
        </TouchableOpacity >
    )
}
SingSelectCard.defaultProps = {
    disabled: false,
    item: 'assas asdbasjdba sda',
    onPress: () => { },
    isSelected: false,
}
