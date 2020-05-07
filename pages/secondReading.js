
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


class SecondReading extends React.Component {
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
       this.props.navigation.navigate('Today');
       return true;
   }

 render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

          <View style={styles.titleContainer}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={() => this.props.navigation.navigate('Today')} >
               <View style={styles.menuIcon}>
                   <Image source={require('../assets/blackBack.png')} style={styles.imageSize}  />
               </View>
                </TouchableOpacity>
              <View style={styles.title}><Text style={styles.titleText}>Second Reading</Text></View>
             <View style={styles.searchIcon}>

             </View>
         </View>




     <View style={styles.testimonyListContainer} >

     <View style={styles.readingHeader}>
         <View style={styles.readingTitle}><Text style={styles.readingTitleText}>One who is bitten, who sees the serpent, shall live.</Text></View>
         <View style={styles.calendarContainer}><Image source={require('../assets/book.png')} style={styles.calendarImg} />
         <View style={{flexWrap: 'wrap',width:wp('80%'), height:hp('5%'), textAlign:'center', flexDirection:'row'}}><Text style={{color:'#000000',alignItems:'center', fontSize:13, fontWeight:'bold',flex: 1, flexWrap: 'wrap', textAlign:'center',}}>A reading from the Book of Roman 8:8-11</Text></View>
         </View>
     </View>




        <View style={styles.resContent}>
        <ScrollView vertical={true}
        style={styles.scroll}
         ref={(scrollView) => {scrollView = scrollView; }}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.resContentText}>

        8 Those who are in the realm of the flesh cannot please God. {"\n"}

        9 You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ. {"\n"}
        10 But if Christ is in you, then even though your body is subject to death because of sin, the Spirit gives life[a] because of righteousness. {"\n"}
        11 And if the Spirit of him who raised Jesus from the dead is living in you, he who raised Christ from the dead will also give life to your mortal bodies because of[b] his Spirit who lives in you.

        </Text>
        </ScrollView>
        </View>


        <View style={styles.navigationDown}>

          <TouchableOpacity

               onPress={() => this.props.navigation.navigate('BottomTab')}>
               <View style={styles.shareCircleA}>
               <Image source={require('../assets/tag.png')} style={styles.shareIconSize}  />
               </View>
          </TouchableOpacity>
               <View style={styles.shareCircle}>
               <Image source={require('../assets/circleLove.png')} style={styles.shareIconSize}  />
               </View>
               <View style={styles.shareCircle}>
               <Image source={require('../assets/share.png')} style={styles.shareIconSize}  />
               </View>
          </View>










        <View style={styles.navigationDown}>

          <TouchableOpacity

               onPress={() => this.props.navigation.navigate('BottomTab')}>
               <View style={styles.shareCircleA}>
               <Image source={require('../assets/tag.png')} style={styles.shareIconSize}  />
               </View>
          </TouchableOpacity>
               <View style={styles.shareCircle}>
               <Image source={require('../assets/circleLove.png')} style={styles.shareIconSize}  />
               </View>
               <View style={styles.shareCircle}>
               <Image source={require('../assets/share.png')} style={styles.shareIconSize}  />
               </View>
          </View>














     </View>




    </View>

    );
  }
}
export default SecondReading;

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
 top:hp('55%'),
right:wp('-78%')

},
backIconSize:{
 width:40,
 height:40,
margin:20
},
shareIconSize:{
width:20,
height:20,
margin:20
},
loveIconSize:{
width:25,
height:25,
alignItems:'center',
justifyContent:'center'
},
loveCircle:{
width:30,
height:30,
borderRadius:50,
backgroundColor:'#ffffff',
alignItems:'center',
justifyContent:'center',
margin:20,
},
shareCircle:{
width:50,
height:50,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
resizeMode: 'contain',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 backgroundColor:'#ffffff',
marginRight:wp('70%'),
marginLeft:20,
marginTop:10,
},
shareCircleA:{
width:50,
height:50,
borderRadius:50,
alignItems:'center',
justifyContent:'center',
marginLeft:20,
marginRight:20,
resizeMode: 'contain',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 backgroundColor:'#ffffff',
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
})
