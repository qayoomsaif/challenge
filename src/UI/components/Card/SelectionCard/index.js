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
import { SelectedCheckBox, UnselectedCheckBox } from 'SVG'

export function SelectionCard({
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
            <View style={styles.checkBock} >
                {isSelected ? <SelectedCheckBox width={hp(20)} height={hp(20)}
                /> : <UnselectedCheckBox width={hp(20)} height={hp(20)}
                />}
            </View>
            <Text style={[styles.text]}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}
SelectionCard.defaultProps = {
    disabled: false,
    item: 'assas asdbasjdba sda',
    onPress: () => { },
    isSelected: false,
}
