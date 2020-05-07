import {
  Dimensions,
} from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10,
    fontSize:12,
    color:'#663300',
  },
  navSectionStyle: {
    flexDirection:'row',
    width: Dimensions.get('window').width - 220,
    alignItems:'center',
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
   width: Dimensions.get('window').width - 220,
   height:hp('40%'),

  },
  iconSize:{
   width:18,
   height:18,
   marginLeft:15,
  },

  footerText:{
   fontSize:23,
   fontStyle:'italic',
   fontFamily:'serif',
   fontWeight:'bold',
   textAlign:'center',
   color:'#663300',
  },
  footerImage:{
   width: Dimensions.get('window').width - 200,
   height:hp('30%'),
   position: 'absolute',
    bottom: -40,
  },
  scroll:{
   marginTop:30,
  },
  closeContainer:{
   width: Dimensions.get('window').width - 220,
   height:hp('15%'),
   position: 'absolute',
   flexDirection:'row',
   justifyContent:'flex-end',
   marginRight:25,
   marginTop:20,
  },
  closeImage:{
   width:25,
   height:25,
   resizeMode:'contain'
  },

};
