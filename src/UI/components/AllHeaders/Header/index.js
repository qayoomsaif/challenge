import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import MI from "react-native-vector-icons/MaterialIcons";
import { Router } from "Factory";
const Header = ({ onPress, title, option, showOption, onPressOption }) => {
  return (
    <View cardElevation={2} cardMaxElevation={2} style={styles.header} >
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => (onPress ? onPress() : Router.back())}>
          <MI
            name="chevron-left"
            size={styles.backIcon}
            color="#000"
            style={styles.backButton}
          />
        </TouchableOpacity>
      </View>
      {title ? (
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      ) : null}
      {showOption ? (
        <View style={styles.optionBlockContainer}>
          <TouchableOpacity
            style={styles.optionBlock}
            onPress={() => (onPressOption ? onPressOption() : null)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export { Header };
