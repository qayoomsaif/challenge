import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
// import CardView from 'react-native-cardview';
import styles from './style';
import MI from 'react-native-vector-icons/MaterialIcons';
import { Router } from 'Factory';
const PageHeader = ({ onPress, title, option, showOption, onPressOption }) => {
  return (
    <View cardElevation={2} cardMaxElevation={2} style={styles.header}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => (onPress ? onPress() : Router.back())}>
          <MI name="chevron-left" size={styles.backIcon} color="#000" style={styles.backButton} />
        </TouchableOpacity>
        {title ? <Text style={{ textAlign: 'center', width: '50%' }}>{title}</Text> : null}
      </View>
      <View style={{ width: '100%' }}></View>
      {showOption ? (
        <TouchableOpacity style={styles.optionBlock} onPress={() => (onPressOption ? onPressOption() : null)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export { PageHeader };
