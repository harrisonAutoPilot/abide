import React from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
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
import Hr from 'react-native-hr-component';
import {tesData} from '../utils/testimony/testimonyCardData';
const width = Dimensions.get('window').width;

import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();
class TodayReading extends React.Component {
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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
       this.props.navigation.navigate('Reading');
       return true;
   }

 render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={styles.top}>
      <Image source={require('../assets/light.png')} style={styles.topImgSize}  />
           <View style={styles.navigation}>
             <TouchableOpacity
              style={styles.backCircle}
              onPress={() => this.props.navigation.navigate('Reading')}>
                  <Image source={require('../assets/back.png')} style={styles.backIconSize}  />


             </TouchableOpacity>
                  <View style={styles.loveCircle}>
                  <Image source={require('../assets/circleLove.png')} style={styles.backIconSize}  />
                  </View>
             </View>
             <View style={styles.readingHeader}>
             <View style={styles.readingTitle}><Text style={styles.readingTitleText}>Power of his Word</Text></View>
             <View style={styles.dateContainer}>
              <View style={styles.calendarContainer}><Image source={require('../assets/calendar.png')} style={styles.calendarImg} /></View>
             <Text style={{color:'#ffffff', fontSize:10}}>Thursday 29th October 2020</Text>
             </View>
             </View>

     </View>
     <View style={styles.down}>
     <View style={styles.navigationDown}>

       <TouchableOpacity

            onPress={() => this.props.navigation.navigate('BottomTab')}>
            <View style={styles.shareCircleA}>
            <Image source={require('../assets/tag.png')} style={styles.backIconSize2}  />
            </View>
       </TouchableOpacity>
            <View style={styles.shareCircle}>
            <Image source={require('../assets/share.png')} style={styles.backIconSize}  />
            </View>
       </View>
       <View style={styles.testimonyListContainer} >
       <ScrollView vertical={true}
       style={styles.scroll}
        ref={(scrollView) => {scrollView = scrollView; }}
       showsVerticalScrollIndicator={false}>



        <View style={styles.testimonyCard}>

        <View style={styles.readingIntro}>
        <Text style={{color:'#003300',fontSize:14,fontWeight:'bold'}}>DAILY READING</Text>
        </View>
        <View style={styles.firstButtonCover}>
        <TouchableOpacity
            style = {styles.signButton}
             onPress={() => this.props.navigation.navigate('FirstReading')}>
            <Text style = {styles.buttonText}  > First Reading</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.secondButtonCover}>
        <TouchableOpacity
            style = {styles.signButton}
             onPress={() => this.props.navigation.navigate('SecondReading')}>
            <Text style = {styles.buttonText}  > Second Reading</Text>
         </TouchableOpacity>
        </View>
        <View style={styles.thirdButtonCover}>
        <TouchableOpacity
            style = {styles.signButton}
             onPress={() => this.props.navigation.navigate('Gospel')}>
            <Text style = {styles.buttonText}  > Gospel</Text>
         </TouchableOpacity>

        </View>
        <View style={styles.resContent}>
        <View style={styles.psalm}><Text style={styles.psalmText}> Responsorial Psalm Ps 102:1-2.15-17.18-20</Text></View>
         <View style={styles.resTitle}><Text style={styles.resTitleText}> O Lord, hear my prayer, and let my cry come to you.</Text></View>
         <View style={styles.resContentInner}><Text style={styles.resContentText}>

         1. O LORD, hear my prayer, and let my cry come to you. Do not hide your face from me in the day of my distress. Turn your ear towards me; on the day when I call, speedily answer me. R. {"\n"}

         2. The nations shall fear the name of the LORD, and all the earth's kings your glory. When the LORD shall build up Sion, he will appear in all his glory. Then he will turn to the prayers of the helpless; he will not despise their prayers. R.{"\n"}

         3. Let this be written for ages to come,that a people yet unborn may praise the LORD the LORD looked down from his holy place on high, looked down from heaven to the earth, to hear the groans of the prisoners, and free those condemned to die. R1.{"\n"}
         4. O LORD, hear my prayer, and let my cry come to you. Do not hide your face from me in the day of my distress. Turn your ear towards me; on the day when I call, speedily answer me. R1. {"\n"}

         5. The nations shall fear the name of the LORD, and all the earth's kings your glory. When the LORD shall build up Sion, he will appear in all his glory. Then he will turn to the prayers of the helpless; he will not despise their prayers. R.{"\n"}

         6. Let this be written for ages to come,that a people yet unborn may praise the LORD the LORD looked down from his holy place on high, looked down from heaven to the earth, to hear the groans of the prisoners, and free those condemned to die. R.{"\n"}
          7. O LORD, hear my prayer, and let my cry come to you. Do not hide your face from me in the day of my distress. Turn your ear towards me; on the day when I call, speedily answer me. R1. {"\n"}

          8. The nations shall fear the name of the LORD, and all the earth's kings your glory. When the LORD shall build up Sion, he will appear in all his glory. Then he will turn to the prayers of the helpless; he will not despise their prayers. R.{"\n"}

        
         </Text>
         </View>

        </View>



        </View>





              </ScrollView >
       </View>
     </View>

   </View>



    );
  }
}
export default TodayReading;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#000000'
 },
 top:{
  width:wp('100%'),
  height:hp('23%'),
  backgroundColor:'pink',
 },
 down:{
  width:wp('100%'),
  height:hp('80%'),
  backgroundColor:'#ffffff',
  borderTopLeftRadius:15,
  borderTopRightRadius:15,
 },
 navigation:{
  flexDirection:'row',
  width:wp('100%'),
  height:hp('12%'),
  justifyContent:'space-between',
 },
 navigationDown:{
  flexDirection:'row',
  width:wp('100%'),
  height:hp('12%'),
  position:'absolute',
  top:hp('-7%'),

 },
 backIconSize:{
  width:20,
  height:20,
margin:20
},
backIconSize2:{
 width:20,
 height:20,

},
loveIconSize:{
 width:20,
 height:20,
alignItems:'center',
justifyContent:'center'
},
loveCircle:{
 width:35,
 height:35,
 borderRadius:50,
 backgroundColor:'#ffffff',
 alignItems:'center',
 justifyContent:'center',
 marginTop:25,
 marginRight:20,
 marginLeft:20,
},
backCircle:{
 width:35,
 height:35,
 borderRadius:50,
 alignItems:'center',
 justifyContent:'center',
 marginTop:25,
 marginRight:20,
 marginLeft:20,
},
shareCircle:{
 width:45,
 height:45,
 borderRadius:50,
 alignItems:'center',
 justifyContent:'center',
 margin:25,
 resizeMode: 'contain',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  flexDirection:'row',
  backgroundColor:'#ffffff',
 zIndex:5,
},
testimonyListContainer:{
position:'absolute',
flexDirection:'column',
top:hp('2%'),
width:wp('100%'),
height:hp('80%'),
zIndex:0,
},
shareCircleA:{
 width:45,
 height:45,
 borderRadius:50,
 alignItems:'center',
 justifyContent:'center',
 marginTop:25,
 marginBottom:25,
 marginLeft:wp('50%'),
 resizeMode: 'contain',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  flexDirection:'row',
  backgroundColor:'#ffffff',
   zIndex:9,

},
topImgSize:{
 position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:wp('100%'),
  height:hp('30%'),
},
readingHeader:{
width:wp('100%'),
height:hp('10%'),
position:'absolute',
top:hp('15%')

},
readingTitle:{
paddingLeft:20,
},
readingTitleText:{
 color:'#ffffff',
 fontSize:22,
 fontFamily:'Arial',
 fontStyle:'italic',
 fontWeight:'bold',
},
dateContainer:{
 flexDirection:'row',

},
calendarImg:{
 width:12,
 height:12,
},
calendarContainer:{
 width:wp('4%'),
 marginLeft:wp('5%'),
},
readingIntro:{
 position:'absolute',
 top:hp('2%'),
 width:wp('70%'),
 marginLeft:wp('12%'),
},
firstButtonCover:{
width:wp('100%'),
position:'absolute',
top:hp('9%'),
alignItems:'center',
zIndex:0,
},
secondButtonCover:{
width:wp('100%'),
position:'absolute',
top:hp('17%'),
alignItems:'center',
zIndex:0,
},
thirdButtonCover:{
width:wp('100%'),
position:'absolute',
top:hp('25%'),
alignItems:'center',
zIndex:0,
},
signButton:{
width:wp('70%'),
height:hp('7%'),
alignItems:'center',
justifyContent:'center',
borderRadius:5,
resizeMode: 'contain',
  borderWidth: 0,
 borderRadius: 1.5,
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 5,
 flexDirection:'row',
 backgroundColor:'#fff',

 },
buttonText:{
 fontSize:17,
 fontWeight:'bold',
 color:'#663300',
 fontFamily:'Arial',
 zIndex:0,
},
// responsiveContainer:{
//  width:wp('100%'),
//   height:hp('70%'),
//   backgroundColor:'pink',
//   position:'absolute',
// zIndex:0,
// },

resContentInner:{
width:wp('100%'),
 height:hp('90%'),
 top:hp('42%'),
 margin:10,
},
psalm:{
 width:wp('96%'),
 height:hp('10%'),
 position:'absolute',
 top:hp('32%'),
 marginTop:17,
 marginLeft:5,
 marginRight:5,
 marginBottom:17,
},
psalmText:{
 color:'#ff6699',
 fontSize:16,
 fontWeight:'bold',

},
resTitle:{
 width:wp('90%'),
 height:hp('15%'),
 position:'absolute',
 top:hp('37%'),
 marginTop:17,
 marginLeft:5,
 marginRight:5,
 marginBottom:20,

},
resTitleText:{
 fontSize:14,
 fontWeight:'bold',
 flexWrap: 'wrap'


},
// resContent:{
//  width:wp('99%'),
//  height:hp('120%'),
//  position:'absolute',
//  top:hp('3%'),
//  marginLeft:10,
//  marginRight:5,
//
// },
resContentText:{
 color:'#5c5c3d',
 fontWeight:'bold',
 fontSize:13,
  width:wp('90%'),
   marginTop:10,
   flexWrap: 'wrap'


},
testimonyCard:{
 width:wp('97'),
 height:hp('140%'),
 marginTop:2,
 marginBottom:2,
 marginLeft:5,
 borderRadius:7,


},
listAvatar:{
 width:wp('20%'),
 height:hp('12%'),
 borderRadius:7,

},
listAvatarImg:{
 width:wp('20%'),
 height:hp('12%'),
 resizeMode:'cover',
},
listContent:{

},
listTitleContainer:{
flexDirection:'row',

},
listContentText:{
 width:wp('75%'),
},
listTitleText:{
width:wp('60%'),
},
listLoveAvatar:{
marginRight:5,
marginTop:5,
width:wp('14%'),
flexDirection:'column',
alignItems:'flex-end'

},
listLove:{
 width:20,
height:20,

},



})
