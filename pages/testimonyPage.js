
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


class TestimonyPage extends React.Component <Props> {
  static navigationOptions = {
  headerLeft: <HomeHeaderLeft/>,
  // headerRight:<HeaderRight/>,
 };

  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

          <View style={styles.titleContainer}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={() => this.props.navigation.navigate('Testimony')} >
               <View style={styles.menuIcon}>
                   <Image source={require('../assets/blackBack.png')} style={styles.imageSize}  />
               </View>
                </TouchableOpacity>
              <View style={styles.title}><Text style={styles.titleText}>Testimonies</Text></View>
             <View style={styles.searchIcon}>

             </View>
         </View>




     <View style={styles.testimonyListContainer} >

     <View style={styles.readingHeader}>
         <View style={styles.readingTitle}><Text style={styles.readingTitleText}>Total healing from Corona</Text></View>
         <View style={styles.calendarContainer}><Image source={require('../assets/blackCalender.png')} style={styles.calendarImg} />
         <Text style={{color:'#000000', fontSize:10}}>Thursday 29th October 2020</Text>
         </View>
     </View>




        <View style={styles.resContent}>
        <ScrollView vertical={true}
        style={styles.scroll}
         ref={(scrollView) => {scrollView = scrollView; }}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.resContentText}>

        This is our story. Everyone’s story is different. Yet since this experience, Michelle and I have felt a responsibility to bear our testimonies of the power of the priesthood, faith in patriarchal blessings, trust in the love of God, and hope through the Atonement of Jesus Christ. Yes, we experienced difficult challenges, but we’ve also experienced miraculous blessings. We feel we would be ungrateful if we did not share our testimonies that living the gospel helps us deal with our challenges. We know that all stories do not unfold like ours did. Nevertheless, we all can be blessed to know God’s plan for our lives through the confirming witness of the Holy Ghost. Our testimonies are founded on truth, not whether miracles follow. {"\n"}

    Elder Jeffrey R. Holland of the Quorum of the Twelve Apostles spoke of the timing of events in our life experience:{"\n"}

    “I think of those who want to be married and aren’t, those who desire to have children and cannot, those who have acquaintances but very few friends, those who are grieving over the death of a loved one or are themselves ill with disease. I think of those who suffer from sin﻿—their own or someone else’s﻿—who need to know there is a way back and that happiness can be restored. I think of the disconsolate and downtrodden who feel life has passed them by, or now wish that it would pass them by. To all of these and so many more, I say: Cling to your faith. Hold on to your hope.{"\n"}

    “… Some blessings come soon, some come late, and some don’t come until heaven; but for those who embrace the gospel of Jesus Christ, they come.”2{"\n"}

    Rachel Faith Black and Elisabeth Hope Black are living witnesses that the Lord is personally involved in the lives of His children. Each step along the way, the hand of the Lord was visible to us. Our testimonies, in turn, continued to grow during my fight with cancer as well as during the miraculous blessing that came afterward. The trials and challenges, the blessings and miracles that others experience in this life will certainly be different from those we experienced, but our testimony is that all who strive to follow God’s plan for their lives will be given the power that can help them endure as well as rejoice.{"\n"}

    The Gospel Is Our Sure Foundation

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














     </View>




    </View>

    );
  }
}
export default TestimonyPage;

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

calendarContainer:{
 width:wp('4%'),
 margin:10
},
calendarImg:{
 width:12,
 height:12,
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
 top:hp('6%'),
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
paddingLeft:20,
marginBottom:hp('1%')
},
readingTitleText:{
 color:'gray',
 fontSize:22,
 fontStyle:'italic',
 fontWeight:'bold',
},
dateContainer:{
 flexDirection:'row',

},
calendarImg:{
 width:12,
 height:12,
 marginRight: 10,
},
calendarContainer:{
 width:wp('90%'),
 marginLeft:wp('5%'),
 flexDirection:'row',
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
