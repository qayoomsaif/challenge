import React, { useState, useCallback, useEffect, useRef } from 'react';
import {
  Dimensions,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  RefreshControl,
  FlatList,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  Platform,
  Linking,
  KeyboardAvoidingView,
  ToastAndroid,
  TextInput,
} from 'react-native';
import { Services } from 'Services';
import { connect } from 'react-redux';
import { changeUserInfo, changeIsLogin } from 'redux-store/actions';
// Styles Imports
import {
  color,
  font,
  resize,
  hp,
  wp,
  wps,
  square,
  width,
  height,
  hps,
} from 'globalStyle';
import styles from './style';
import { Router, Validate } from 'Factory';
import Controller from './controller';
import { Heading, SubHeading } from '../../../components/Card'
export default Home = props => {
  const [isErr, setisErr] = useState(false)
  const [loading, setloading] = useState(false)
  const [isActive, setisActive] = useState({ type: 0, msg: '' })
  const controller = new Controller(setloading);
  return <View style={styles.container}>
    <Heading
      style={styles.screenHeadingText}
      text={'Plaid and Graph'}
    />
  </View>
};

