import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Image, Modal, Keyboard } from 'react-native'
import styles from './style'
import FastImage from 'react-native-fast-image'
import { DateFormat } from 'Factory'
export function GifsCard({
    onPress,
    item,
    ...props
}) {
    return (
        <View
            onPress={() => onPress(item)}
            style={[styles.container]}>
            <TouchableOpacity style={styles.userBlock}>
                <FastImage
                    source={{ uri: item.user?.avatar_url }}
                    style={styles.userImage}
                />
                <View style={[styles.userInfoBlock]} >
                    <Text style={[styles.userNameText]}>
                        {item?.user?.display_name ? item?.user?.display_name : item?.user?.username ? item?.user?.username : 'Unknown'}
                    </Text>
                    {item?.import_datetime ? <Text style={[styles.dateText]}>
                        {DateFormat?.getDisplayFormat(item?.import_datetime)}
                    </Text> : null}
                </View>
            </TouchableOpacity>
            {item?.title ? <Text style={[styles.titleText]}>
                {item?.title}
            </Text> : null}
            {item.images?.original?.url ? <TouchableOpacity activeOpacity={0.7}>
                <FastImage
                    source={{ uri: item.images?.original?.url }}
                    style={styles.image}
                />
            </TouchableOpacity> : null}
        </View>
    )
}
GifsCard.defaultProps = {
    disabled: false,
    item: {},
    onPress: () => { },
    isSelected: false,
}
