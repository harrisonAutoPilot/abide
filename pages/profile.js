import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;


class Profile extends React.Component {

 state = {
      email: '',
      password: ''
   }
  static navigationOptions = {
 headerShown:'false',
  };




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('8%')}}>
     <View style={styles.avartarCover}>
    <Image source={require('../assets/person.png')} style={styles.imageSize} />
    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <Text style={styles.inputText}>HARRISON EBUBE</Text>

             <Text style={styles.inputText}>harrison.o.ebube@gmail.com</Text>
             <Text style={styles.inputText}>+234 806 258 5929</Text>
          </View>

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={() => this.props.navigation.navigate('BottomTab')}>
              <Text style = {styles.submitButtonText}  >EDIT PROFILE </Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>



            </View>

     </View>
   </View>



    );
  }
}
export default Profile;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 caption:{
  color:'	rgb(255,165,0)',
  margin:10,
  fontSize:25,
 },
 avartarCover:{
  width:wp('50%'),
  height: hp('27%'),
  borderWidth:8,
  borderRadius:100,
  borderColor:'#ff8c1a',
  justifyContent:'center',
   alignItems: 'center',
 },
 imageSize:{
 width: wp('40%'),
 height: hp('15%'),
 resizeMode: 'contain',
  },
 content:{
position:'absolute',
 justifyContent:'center',

top:hp('35%'),
 },
  input: {
     width: 350,
     height: 55,
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 20,
     borderColor:'gray',
     borderStyle:'solid',
      borderWidth: 1,
     fontSize: 18,
     fontWeight: '500',
 justifyContent:'center',
 marginLeft:wp('12%'),
 marginRight:wp('12%'),
   },
   inputText: {
      width: 300,
      height: 35,
      margin: 10,
      color: 'black',
      borderStyle:'solid',
      fontSize: 20,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
       textAlign:'center',


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
      borderBottomWidth:1,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
    },

signButton: {
backgroundColor:'rgb(255,165,0)',
width:wp('80%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderRadius:5,
       },

 welcomeMessage:{
  color:'#00b300',
  margin:10,
  fontSize:20,
 },
 captionBB:{
 justifyContent:'center',
 alignItems:'center',
 margin:5,
 },
 captionB:{
  color:'black',
  fontSize:15,

 },
 username:{
  margin:10,

 },
 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
 },

    submitButtonText:{
    color: 'white'
    },
    profileImage:{
     width:100,
     height:100,
     backgroundColor:'#00b300',
     borderRadius:10,
    },
    imageLogin:{
     width:200,
     height:200,
     alignItems:'center',
    },
submitButton: {
 backgroundColor:'rgb(255,165,0)',
 padding: 10,
 margin: 15,
 height: 50,
 alignItems:'center',
 justifyContent:'center',
   },


   submitButtonText:{
   color: 'white'
   },
   profileImage:{
    width:100,
    height:100,
    backgroundColor:'#00b300',
    borderRadius:10,
   },
   imageLogin:{
    width:200,
    height:200,
    alignItems:'center',
   },
   regWith:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   Te:{
    color:'gray',
    fontSize:10,
   },
   line:{
    color:'#663300',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:13,
    fontSize:15,
   },
   regSelect:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
   },
googleButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(255, 70, 6)',
 borderStyle:'solid',
 margin:4,
justifyContent:'center',
backgroundColor:'rgb(255, 70, 6)',
borderRadius:2,
},
faceBookButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(30, 149, 255)',
 borderStyle:'solid',
 margin:4,
 justifyContent:'center',
 backgroundColor:'rgb(30, 149, 255)',
 borderRadius:2,

},
button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
imagefaceB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:10,
},

imagegoogB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:13,
}
})
