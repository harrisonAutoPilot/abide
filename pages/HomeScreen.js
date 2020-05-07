import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
 TouchableOpacity,
  Image,
} from 'react-native';
// import {
//   handleAndroidBackButton,
//   exitAlert
// } from '.pages/modules/androidBackButton';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
console.disableYellowBox = true;

class HomeScreen extends React.Component <Props> {
  static navigationOptions = {

  };
  componentDidMount (){
   setTimeout(()=>{
  this.props.navigation.navigate('Login')
 }, 5000)
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>


          <Image source={require('../assets/background.jpeg')} style={styles.bgImg} />



       <View style={{position:'absolute',justifyContent: 'flex-end', alignItems:'center', backgroundColor:'transparent', top:hp('40%'), flexDirection: 'column'}}>
       <View style={{top:-120,height: '10%', width:width, alignItems:'center', position:'relative'}}>
               <Image source={require('../assets/bible.png')} style={styles.imageSize}  />
       </View>
       <View style={{ alignItems:'center', justifyContent:'center',position:'absolute',top:hp('20%')}}>
   <Text style={{fontSize:39, color:'white', textAlign:'center',}}>Abide In My Word</Text>
    <Text style={{fontSize:15, color:'white', textAlign:'center',}}>Your Daily Spiritual Companion</Text>
       </View>


      </View>
     </View>
    );
  }
}
export default HomeScreen;
const styles = StyleSheet.create({
 container:{
  flexDirection: 'column',
  width :width,
  flex:1,
 },
inner:{
 flexDirection:'column',
 alignItems: 'center',

},
 top:{
  width:wp('100%'),
  height:height / 1.5,
  flexDirection: 'column',
  alignItems:'center',
 justifyContent:'center',

 },
 imageLogo:{
  width: width/2,
  height:50,
 },

down:{
 width:width,
height:height / 4,
},
imageSize:{
 width: wp('45%'),
    height: hp('15%'),
    alignSelf: 'center',
    resizeMode: 'contain',
},

logoView:{
justifyContent:'center',
width:width,
alignItems:'center',

},
input1: {
   width: 300,
   height: 35,
   margin: 20,
   padding: 8,
   color: 'black',
   borderStyle:'solid',
   borderBottomColor:'gray',
   fontSize: 14,
   position:'absolute',
   borderBottomWidth:1,
 },
 welcomeMessageView:{

 },
welcomeMessage:{
 fontSize:20,
 color:'gray',
padding:20,
fontWeight:'bold',
},
submitButton: {
      backgroundColor:'#00b300',
      padding: 30,
      width:width/1.2,
      height: 50,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:3,
   },
   contactButton: {
         backgroundColor:'rgba(256,256,256, 0.45)',
         padding: 30,
         width:width/1.2,
         height: 50,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:3,
      },
   submitButtonText:{
   color: '#fff',
   fontSize:17,
   position:'absolute',
   },
   contactButtonText:{
   color: 'white',
   fontSize:17,
   position:'absolute',
   },
ButtonSignIn:{
 flexDirection:'column',
},
ButtonContactUs:{
  marginTop:10,
  marginBottom:30,
},
bgImg:{
 position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:width,

}
});
