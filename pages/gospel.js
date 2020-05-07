
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


class Gospel extends React.Component {
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
              <View style={styles.title}><Text style={styles.titleText}>Gospel Reading</Text></View>
             <View style={styles.searchIcon}>

             </View>
         </View>

     <View style={styles.testimonyListContainer} >

     <View style={styles.down}>
      <View style={styles.responsoralPsalmContainer}>
           <View style={styles.responsoralPsalmImageContainer}>
           <Image source={require('../assets/speaker.png')} style={styles.speakerImg} />
           </View>
           <View style={styles.responsoralPsalmContent}>
           <Text style={styles.responsoralPsalmContentText}>Glory and praise to you, O Christ. The seed is the word of God, and the sower is Christ; all who find him will abide for ever. Glory and praise to you, O Christ.</Text>
           </View>

      </View>

     <View style={styles.readingHeader}>
         <View style={styles.readingTitle}><Text style={styles.readingTitleText}>When you have lifted up the Son of man, then you will know that I am he.</Text></View>
         <View style={styles.calendarContainer}><Image source={require('../assets/book.png')} style={styles.calendarImg} />
        <View style={{flexWrap: 'wrap',width:wp('80%'), height:hp('5%'), textAlign:'center',marginRight:5, flexDirection:'row'}}><Text style={{color:'#000000', fontSize:12, fontWeight:'bold',flex: 1, flexWrap: 'wrap', textAlign:'center'}}>A reading from the holy Gospel according to John 8:21-30</Text></View>
         </View>
     </View>

        <View style={styles.resContent}>
        <ScrollView vertical={true}
        style={styles.scroll}
         ref={(scrollView) => {scrollView = scrollView; }}
        showsVerticalScrollIndicator={false}>

        <Text style={styles.resContentText}>

        At that time. Jesus said to the Pharisees, “I go away, and you will seek me and die in your sin; where I am going, you cannot come.” Then said the Jews, “Will he kill himself, since he says, ‘Where I am going, you cannot come’?” He said to them, “You are from below, I am from above; you are of this world, I am not of this world. I told you that you would die in your sins, for you will die in your sins unless you believe that I am he.” They said to him, “Who are you?” Jesus said to them, “Even what I have told you from the beginning. I have much to say about you and much to judge; but he who sent me is true, and I declare to the world what I have heard from him.” They did not understand that he spoke to them of the Father. So Jesus said, “When you have lifted up the Son of man, then you will know that I am he, and that I do nothing on my own authority but speak thus as the Father taught me. And he who sent me is with me; he has not left me alone, for I always do what is pleasing to him.” As he spoke thus, many believed in him. {"\n"}
        At that time. Jesus said to the Pharisees, “I go away, and you will seek me and die in your sin; where I am going, you cannot come.” Then said the Jews, “Will he kill himself, since he says, ‘Where I am going, you cannot come’?” He said to them, “You are from below, I am from above; you are of this world, I am not of this world. I told you that you would die in your sins, for you will die in your sins unless you believe that I am he.” They said to him, “Who are you?” Jesus said to them, “Even what I have told you from the beginning. I have much to say about you and much to judge; but he who sent me is true, and I declare to the world what I have heard from him.” They did not understand that he spoke to them of the Father. So Jesus said, “When you have lifted up the Son of man, then you will know that I am he, and that I do nothing on my own authority but speak thus as the Father taught me. And he who sent me is with me; he has not left me alone, for I always do what is pleasing to him.” As he spoke thus, many believed in him. {"\n"}
         V. The Gospel of the Lord.{"\n"}
         R. Praise to you Lord Jesus Christ.

        </Text>

 </ScrollView>
        </View>


        <View style={styles.navigationDown}>

          <TouchableOpacity

               onPress={() => this.props.navigation.navigate('')}>
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

    </View>

    );
  }
}
export default Gospel;

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
 height:hp('60%'),
 position:'absolute',
 top:hp('27%'),
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
width:wp('98%'),
height:hp('15%'),
position:'absolute',
resizeMode: 'contain',
 shadowColor: '#f4f4f4',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 flexDirection:'row',
 flexDirection:'column',
top:hp('19%'),

},
readingTitle:{
 paddingLeft:wp('2%'),
},
readingTitleText:{
 color:'gray',
 fontSize:17,
 fontWeight:'bold',
 color:'#ff8533',
 textAlign:'center',
 fontStyle:'italic',
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
responsoralPsalmContainer:{
 width:wp('95%'),
 height:hp('15%'),
 position:'absolute',
 top:hp('2%'),
 flexDirection:'row',
 borderWidth:1,
 borderColor:'gray',
 borderStyle:'solid',
 borderRadius:10,
 justifyContent:'center',
 alignSelf:'center',
},
responsoralPsalmImageContainer:{
width:wp('20%'),
height:hp('15%'),
alignItems:'center',
justifyContent:'center'

},
responsoralPsalmContent:{
 width:wp('75%'),
 height:hp('15%'),
 alignItems:'center',
 justifyContent:'center',
 padding:10,
},
speakerImg:{
 width:wp('10%'),
 height:hp('8%'),
 resizeMode:'contain'
},
responsoralPsalmContentText:{
 fontSize:13,
 color:'#003300',
 fontWeight:'bold',
}
})
