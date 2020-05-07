import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Image,TouchableOpacity, BackHandler} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
class DrawerMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  // handleBack() {
  //    // Registered function to handle the Back Press
  //    // We are generating an alert to show the back button pressed
  //    alert('You clicked back. This will Exit the App');
  //    // We can move to any screen. If we want
  //   exitApp();
  //    // Returning true means we have handled the backpress
  //    // Returning false means we haven't handled the backpress
  //    return true;
  //  }

  render () {
    return (
      <View style={styles.container}>
      <View style={styles.closeContainer}>
      <TouchableOpacity
           onPress={() => this.props.navigation.toggleDrawer()}>
      <Image source={require('../../assets/clo.png')} style={styles.closeImage}/>
      </TouchableOpacity>
      </View>
        <ScrollView style={styles.scroll}>
          <View>

            <View style={styles.navSectionStyle}>

            <Image source={require('../../assets/reading.png')} style={styles.iconSize}/>
            <TouchableOpacity
                 onPress={() => this.props.navigation('Home')}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Home')}>
               Daily Reading
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/tes.png')} style={styles.iconSize}/>
            <TouchableOpacity
                 onPress={() => this.props.navigation('Testimony')}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Testimony')}>
              Testimonies
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/mass.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MassIntention')}>
               Mass Intention
              </Text>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/saintP.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Saint')}>
               Saint of the Day
              </Text>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/pray.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Prayers')}>
              Prayers
              </Text>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/pro.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile')}>
               Profile Management
              </Text>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/out.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle}  onPress ={()=>{ console.log('clicked');
                   return BackHandler.exitApp();
                     }
                      }>
              Log Out
              </Text>
            </View>
          </View>

        </ScrollView>
        <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Abide In My Word</Text>
        <Image source={require('../../assets/mosco.png')} style={styles.footerImage}/>
        </View>
      </View>
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object
};

export default DrawerMenu;
