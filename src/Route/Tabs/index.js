import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeStack from './HomeStack'
import ExploreStack from './ExploreStack'
import ProfileStack from './ProfileStack'
import { color, hp, wp, font } from 'globalStyle'
import { HomeIconUnSelected, HomeIconSelected, ExploreIconUnSelected, ExploreIconSelected, ProfileIconUnSelected } from 'SVG'

const Tab = createBottomTabNavigator();
export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { paddingVertical: 10 }
      }}
      initialRouteName='Home'
    >
      <Tab.Screen name="Home" component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          // tabBarStyle: {height: 100},
          // tabBarLabelStyle : ({focused}) => {color:focused ? color.app : color.textLight},
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {focused ?
                <HomeIconSelected height={hp(22)} width={hp(22)} />
                : <HomeIconUnSelected height={hp(22)} width={hp(22)} />}
              <Text style={{ marginTop: hp(5), fontFamily: font.one.regular, fontSize: hp(10), color: focused ? color.app : color.textLight }}>{'Home'}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Explore" component={ExploreStack}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {focused ?
                <ExploreIconSelected height={hp(22)} width={hp(22)} />
                : <ExploreIconUnSelected height={hp(22)} width={hp(22)} />}
              <Text style={{ marginTop: hp(5), fontFamily: font.one.regular, fontSize: hp(10), color: focused ? color.app : color.textLight }}>{'Explore'}</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Profile" component={ProfileStack}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              {focused ?
                <ProfileIconUnSelected height={hp(22)} width={hp(22)} />
                : <ProfileIconUnSelected height={hp(22)} width={hp(22)} />}
              <Text style={{ marginTop: hp(5), fontFamily: font.one.regular, fontSize: hp(10), color: focused ? color.app : color.textLight }}>{'Profile'}</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
