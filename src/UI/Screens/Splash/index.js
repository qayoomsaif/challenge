import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, Image, Text, } from 'react-native';
import styles from './style';
import { Router } from 'Factory';
import Controller from './controller';
import { useSelector, useDispatch } from 'react-redux';
export default Splash = ({ route, navigation, ...props }) => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  useEffect(() => {
    setTimeout(() => {
      Router.Home()
    }, 1000);
  }, []);
  const controller = new Controller();
  return <View style={styles.container}>
    <Text style={styles.appNameText}>
      CHALLENG
    </Text>
    <View style={styles.bottomBlock}>
      <Image
        source={require('assets/Icon/splashBottomIcon.png')}
        style={styles.bottomIcon}
      />
    </View>
  </View>
};

