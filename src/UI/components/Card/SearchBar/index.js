import React, { Children, useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Modal, Keyboard } from 'react-native'
import {
    font,
    resize,
    color,
    heightScale,
    widthScale,
    widthScaleSub,
    square,
    width,
    height,
} from 'globalStyle';
import styles from './style'
import AntDesign from 'react-native-vector-icons/AntDesign'
export function SearchBar({
    editText,
    value,
    editable,
    placeholderTextColor,
    placeholder,
    onChangeText,
    isKeyboardShow,
    onSubmitEditing,
    onFocus,
    ref,
    inputBlckStyle,
    underlineColorAndroid,
    keyboardType,
    returnKeyType,
    selectionColor,
    autoCapitalize,
    multiline,
    maxLength,
    numberOfLines,
    autoCorrect,
    secureTextEntry,
    autoFocus,
    spellCheck,
    defaultValue,
    isErr,
    mainBolck,
    isIcon,
    onOpntion,
    opntionButtonStyle,
    iconPath,
    Icon,
    iconSize,
    iconStyle,
    title,
    titleStyle,
    styleBlock,
    style,
    enableOption,
    onBlur,
    ...props
}) {
    const [keyboardShow, setKeyboardShow] = useState(false)
    useEffect(() => {
        let showListener = Keyboard.addListener('keyboardDidShow', () => { setKeyboardShow(true) })
        let hideListener = Keyboard.addListener('keyboardDidHide', () => { setKeyboardShow(false) })
        return () => {
            showListener.remove();
            hideListener.remove();
        }

    }, [keyboardShow])
    useEffect(() => {
        // let showListener = Keyboard.addListener('keyboardDidShow', () => { isKeyboardShow(true); setKeyboardShow(true) })
        // let hideListener = Keyboard.addListener('keyboardDidHide', () => { isKeyboardShow(true); setKeyboardShow(false) })
        isKeyboardShow(keyboardShow)
        // return () => {
        //     showListener.remove();
        //     hideListener.remove();
        // }
    }, [keyboardShow])

    return (
        <View style={[styles.container, mainBolck]}>
            <View style={[styles.subBlock1(isErr,), style,]}>
                {isIcon ? <TouchableOpacity
                    onPress={onOpntion}
                    disabled={!enableOption}
                    style={[styles.iconBlock, opntionButtonStyle]}>
                    {Icon ? <Icon
                        height={heightScale(20)}
                        width={heightScale(20)}
                        size={heightScale(20)}
                        color={color.textDark}
                    /> : iconPath ? <Image
                        source={iconPath}
                        resizeMode={'contain'}
                        style={[styles.icon, iconStyle]}
                    /> : null}

                </TouchableOpacity> : null}
                <TextInput
                    style={[styles.inputBlock(isIcon), inputBlckStyle,]}
                    value={value}
                    editable={editable}
                    onChangeText={onChangeText}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    maxLength={maxLength}
                    multiline={multiline}
                    keyboardType={keyboardType}
                    ref={r => ref(r)}
                    onSubmitEditing={onSubmitEditing}
                    returnKeyType={returnKeyType}
                    numberOfLines={numberOfLines}
                    selectionColor={'#FFFFFF'}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    secureTextEntry={secureTextEntry}
                    onFocus={() => { isKeyboardShow(true); onFocus() }}
                    onBlur={() => { isKeyboardShow(false); onBlur() }}
                    autoFocus={autoFocus}
                    spellCheck={spellCheck}
                    defaultValue={defaultValue}
                />

            </View >
        </View>
    )
}

SearchBar.defaultProps = {
    editText: true,
    enableOption: true,
    value: '',
    editable: true,
    placeholderTextColor: color.textLight,
    // placeholderTextColor: color.placeholder,
    placeholder: 'What you need?',
    title: '',
    onChangeText: () => { },
    isKeyboardShow: () => { },
    style: {},
    onSubmitEditing: () => { },
    onFocus: () => { },
    onOpntion: () => { },
    ref: () => { },
    onBlur: () => { },
    inputBlckStyle: {},
    titleStyle: {},
    mainBolck: {},
    iconStyle: {},
    iconSize: widthScale(20),
    opntionButtonStyle: {},
    underlineColorAndroid: 'transparent',
    keyboardType: "default",
    returnKeyType: 'default',
    selectionColor: '#ffffff',
    autoCapitalize: 'none',
    multiline: false,
    maxLength: 80,
    numberOfLines: 1,
    autoCorrect: false,
    secureTextEntry: false,
    autoFocus: false,
    spellCheck: false,
    defaultValue: '',
    isErr: false,
    isIcon: false,
    containerStyle: {},
    Icon: undefined,
    iconPath: '',
}
