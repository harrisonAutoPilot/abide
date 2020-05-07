
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
  BackHandler
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import HomeHeaderLeft from '../components/header/homeHeader/homeHeaderLeft';
import {data} from '../utils/home/readingCardData';
import {tes} from '../utils/home/testimonyCardData';
import {tesData} from '../utils/testimony/testimonyCardData';
import {saintData} from '../utils/home/saintCardData';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
type Props ={};


class MassIntention extends React.Component {
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
 }

 state = {
      email: '',
      password: ''
   }

    static navigationOptions =
    {

       headerShown:'true',
       headerStyle:{
        backgroundColor:'#000000',
       }
    };

    componentDidMount() {

 }

   componentWillMount() {
       BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

   }

   componentWillUnmount() {
       BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
   }

   handleBackButtonClick() {
       this.props.navigation.navigate('Home');
       return true;
   }

 render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

          <View style={styles.titleContainer}>
          <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Home')} >
               <View style={styles.menuIcon}>
                   <Image source={require('../assets/blackBack.png')} style={styles.imageSize}  />
               </View>
                </TouchableOpacity>
              <View style={styles.title}><Text style={styles.titleText}>Mass Intention</Text></View>
             <View style={styles.searchIcon}>

             </View>
         </View>




     <View style={styles.testimonyListContainer} >

     <View style={styles.content}>
               <View style={styles.username}>

                <TextInput
                        style={styles.input1}
                        placeholder='Full Name'
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
                      style={styles.TextInputStyleClass}
                      placeholder='Enter Your Intentions'
                      autoCapitalize="none"
                      secureTextEntry={true}
                      numberOfLines={10}
                      multiline={true}
                      placeholderTextColor='gray'
                      onChangeText={(passwordVal) =>{
                       this.setState({
                        password:passwordVal,
                       });
                      }}

                      value={this.state.password}
                      />
              </View>

                <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
              <TouchableOpacity
                  style = {styles.signButton}
                   onPress={() => this.props.navigation.navigate('')}>
                  <Text style = {styles.submitButtonText}  > SUBMIT</Text>
               </TouchableOpacity>
               </View>
               <View style={{alignItems:'center',}}>


     <View style={{flexDirection:'row'}}>
     <View><Text>I want to Support this.</Text></View>
     <View><Text style={{fontWeight:'bold', color:'#003300'}}> Donate Here</Text></View>

     </View>
                </View>

         </View>







     </View>




    </View>

    );
  }
}
export default MassIntention;

const styles = StyleSheet.create({

 container:{
 flexDirection:'column',
 width :wp('100%'),
 height:hp('180%'),
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#f2f2f2'
 },
titleContainer:{
flexDirection:'row',
position:'absolute',
top:hp('0%'),
width:wp('100%'),
height:hp('5%'),
justifyContent:'space-between',

},

title:{
marginTop:hp('1%'),

},
titleText:{
 fontSize:18,
 fontWeight:'bold',
 fontStyle:'italic',
 color:'#663300',
 fontFamily:'times new roman'
},

imageSize:{
 width:20,
 height:20,
 margin:10,
},
searchIcon:{
 width:wp('15%'),
 marginLeft:wp('13%'),

},
menuIcon:{
 width:wp('25%'),

},
scrollContainerDown:{
 width:wp('100%'),
 height:hp('25%'),

},

testimonyContainer:{
 flexDirection:'row',
 position:'absolute',
 top:hp('7%'),
 width:wp('100%'),
height:hp('28%'),
paddingLeft:10,
justifyContent:'space-between',

},
testimonyTitle:{

},
viewTitle:{
 marginRight:wp('5%'),
},
viewTitleText:{
 fontSize:14,
 color:'gray',
},
testimonyTitleText:{
 fontSize:15,
 color:'#663300',
 fontWeight:'bold',
 fontFamily:'Arial',
},
testimonyListContainer:{
position:'absolute',
flexDirection:'column',
top:hp('7%'),
width:wp('100%'),
height:hp('90%'),
},
testimonyCard:{
 width:wp('97'),
 height:hp('12%'),
 backgroundColor:'#ffffff',
 marginTop:2,
 marginBottom:2,
 marginLeft:5,
 borderRadius:7,
 flexDirection:'row',
},


resTitle:{
 width:wp('90%'),
 height:hp('15%'),
 position:'absolute',
 top:hp('15%'),
 marginTop:17,
 marginLeft:5,
 marginRight:5,
 marginBottom:20,

},
resTitleText:{
 fontSize:14,
 fontWeight:'bold',
 textAlign:'center'
},
resContent:{
 width:wp('90%'),
 height:hp('81%'),
 position:'absolute',
 top:hp('8%'),
 marginTop:17,
 marginLeft:10,
 marginRight:0,

},
resContentText:{
 color:'#5c5c3d',
 fontWeight:'bold',
 fontSize:15,
 width:wp('92%'),

 marginTop:10,
flexWrap: 'wrap',
marginLeft:wp('2%'),



},
readingHeader:{
width:wp('100%'),
height:hp('18%'),
position:'absolute',


},
readingTitle:{
paddingLeft:15,
paddingRight:15,
marginBottom:hp('1%')
},
readingTitleText:{
 color:'gray',
 fontSize:18,
 fontStyle:'italic',
 fontWeight:'bold',
 textAlign:'center',
},
dateContainer:{
 flexDirection:'row',

},
calendarImg:{
 width:22,
 height:22,
 alignItems:'center'

},
calendarContainer:{
 width:wp('90%'),
 marginLeft:wp('5%'),
 flexDirection:'row',
 height:hp('5%'),
},
readingIntro:{
 position:'absolute',
 top:hp('5%'),
 width:wp('70%'),
 marginLeft:wp('12%'),
},
navigationDown:{
 flexDirection:'column',
 width:wp('100%'),
 height:hp('12%'),
 position:'absolute',
 top:hp('45%'),
right:wp('-78%')

},
backIconSize:{
 width:40,
 height:40,
margin:20
},

content:{
 width:wp('100%'),
position:'absolute',
justifyContent:'center',
alignItems:'center',
top:hp('5%'),

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
width:wp('40%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderRadius:50,
marginBottom:20,

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
  TextInputStyleClass:{
      textAlign: 'center',
      borderWidth: 1,
      borderColor:'gray',
      backgroundColor : "#FFFFFF",
      height: 150,
      width:wp('75%'),
      alignSelf:'center',
      margin:20,

      }
})
