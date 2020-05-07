/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import DrawerMenu from './components/navigation/drawerMenu';
import TodayReading from './pages/todayReading';
import TestimonyPage from './pages/testimonyPage';
import DailyReading from './pages/dailyReading';
import FirstReading from './pages/firstReading';
import SecondReading from './pages/secondReading';
import Saint from './pages/saint';
import Gospel from './pages/gospel';
import MassIntention from './pages/massIntention';
import Prayers from './pages/prayer';
import BottomTab from './components/tabs/bottomTab'
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//import HomeScreenn from './pages/HomeScreenn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
import {createStackNavigator} from 'react-navigation-stack';

// const MainNavigator = createSwitchNavigator({
//   Home: {screen: HomeScreen},
//   Login: {screen: Login},
//   BottomTab: {screen: BottomTab},
//   Today: {screen: TodayReading},
//   TestimonyPage: {screen: TestimonyPage},
//   FirstReading : {screen:FirstReading},
//   SecondReading : {screen:SecondReading},
//   Gospel : {screen:Gospel},
//
//
//
// });
//
// const App = createAppContainer(MainNavigator);
//
// export default App;








const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen: HomeScreen,
    Login:  Login,
    SignUp:  SignUp,
    // Profile:  Profile,
    BottomTab:  BottomTab,
    Today:TodayReading,
    TestimonyPage:TestimonyPage,
    FirstReading : FirstReading,
    SecondReading : SecondReading,
    Gospel : Gospel,
    MassIntention:MassIntention,
    Prayers:Prayers,
    Saint:Saint,

  },
  {
    initialRouteName: "HomeScreen",
    contentOptions: {
      activeTintColor: "red"
    },
    contentComponent: DrawerMenu,
    drawerWidth: Dimensions.get('window').width - 220,
  }
);

const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
  })
);

export default function App() {
  return <Router />;
}
