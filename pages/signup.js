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


class SignUp extends React.Component {

 state = {
      email: '',
      password: '',
       name: '',
       phone: '',
   }
  static navigationOptions = {
 headerShown:'false',
  };


  saveData = ()=>{
         const {email,password} = this.state;

         //save data with asyncstorage
         let loginDetails={
             email: email,
             password: password
         }

         if(email=='harrison' && password == 'admin')
         {

             alert("Successful Login!. Welcome to Abide In My Word Daily Devotional")
            this.props.navigation.navigate('Home')}

         else if (email !='harrison' && password != 'admin'){
           alert("Sorry Registration has been disabled by admin! Please Contact Your Admin On  08062585929")
           this.props.navigation.navigate('')}



  }





  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('1%')}}>


     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('2%')}}>
    <Image source={require('../assets/mary.jpeg')} style={styles.imageSize} />
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Full Name'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    onChangeText={(nameVal) =>{
                     this.setState({
                     name:nameVal,
                     });
                    }}
                    value={this.state.name}
                  />

                  <TextInput
                  style={styles.input1}
                  placeholder='Password'
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  onChangeText={(passwordVal) =>{
                   this.setState({
                    password:passwordVal,
                   });
                  }}

                  value={this.state.password}
                  />

                  <TextInput
                  style={styles.input1}
                  placeholder='Email Address'
                  autoCapitalize="none"
                  placeholderTextColor='gray'
                  onChangeText={(emailVal) =>{
                   this.setState({
                    email:emailVal,
                   });
                  }}

                  value={this.state.email}
                  />
                  <TextInput
                  style={styles.input1}
                  placeholder='Phone Number'
                  autoCapitalize="none"
                  placeholderTextColor='gray'
                  onChangeText={(phoneVal) =>{
                   this.setState({
                    phone:phoneVal,
                   });
                  }}

                  value={this.state.phone}
                  />
          </View>

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
                onPress={this.saveData}>
              <Text style = {styles.submitButtonText}  > CREATE ACCOUNT </Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>



           <View>
           <TouchableOpacity

                onPress={() => this.props.navigation.navigate('Login')}>
           <Text style={{fontWeight:'bold',color:'#003300',padding:10}}>Already have an Account. Login</Text>
           </TouchableOpacity>
           </View>
           </View>
     </View>
   </View>



    );
  }
}
export default SignUp;

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
 imageSize:{
 width: wp('80%'),
 height: hp('30%'),
 alignSelf: 'center',
 resizeMode: 'contain',

  },
 content:{
position:'absolute',
 justifyContent:'center',
top:hp('24%'),
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
backgroundColor:'#663300',
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
