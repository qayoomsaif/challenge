import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import RNRestart from 'react-native-restart'
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('We did catch', error);
    return { hasError: true };
  }
  reStartApp() { RNRestart.Restart() }
  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.msgtext}>
            {'Something went wrong please try again later'}
          </Text>
          <TouchableOpacity
            onPress={() => this.reStartApp()}
            style={styles.tryagaincontainer}>
            <Text style={styles.retrytext}>Try again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

