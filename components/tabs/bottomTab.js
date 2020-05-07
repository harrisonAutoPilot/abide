import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {Navigation} from 'react-navigation';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Tabs from 'react-native-tabs';

console.disableYellowBox = true;

import Home from '../../pages/home';
import DailyReading from '../../pages/dailyReading';
import Testimony from '../../pages/testimony'
import TodayReading from '../../pages/todayReading'
import Profile from '../../pages/profile'


const HomeTab = createSwitchNavigator(

   {

     Home: Home,



   },



);


const CircleTab = createSwitchNavigator(
  {
    Reading: DailyReading,

  },


);

const AccountTab = createSwitchNavigator(
  {

  Testimony: Testimony,



  },


);

const ProfileTab = createSwitchNavigator(
  {

  Profile: Profile,



  },


);




const MainApp = createBottomTabNavigator(
  {

   Home: HomeTab ,
  Reading: CircleTab,
  Testimony: AccountTab ,
  Profile: ProfileTab ,



  },

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
         iconName = `ios-list-box`;
         IconComponent = Ionicons;
       } else if (routeName === 'Reading') {
        iconName = `ios-book`;
      }
      else if (routeName === 'Testimony') {
        iconName = `ios-chatboxes`;
      }
      else if (routeName === 'Profile') {
        iconName = `ios-person`;
      }
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#663300',
    inactiveTintColor: 'gray',
  },
}
);
const BottomTab = createAppContainer(MainApp);

export default BottomTab;
