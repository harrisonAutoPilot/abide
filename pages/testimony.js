
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


class Testimony extends React.Component {
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
       this.props.navigation.navigate('Home');
       return true;
   }

 render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

          <View style={styles.titleContainer}>
          <TouchableOpacity
              style = {styles.signButton}
               onPress={() => this.props.navigation.toggleDrawer()} >
               <View style={styles.menuIcon}>
                   <Image source={require('../assets/menu.png')} style={styles.imageSize}  />
               </View>
                </TouchableOpacity>
              <View style={styles.title}><Text style={styles.titleText}>Testimonies</Text></View>
             <View style={styles.searchIcon}>
                  <Image source={require('../assets/search.png')} style={styles.imageSize}  />
             </View>
         </View>


 <View style={styles.testimonyContainer}>
    <View style={styles.testimonyTitle}>
      <Text style={styles.testimonyTitleText}>Testimonies</Text>
    </View>
    <View style={styles.viewTitle}>
      <Text style={styles.viewTitleText}>View All</Text>
    </View>
    </View>

     <View style={styles.testimonyListContainer} >
     <ScrollView vertical={true}
     style={styles.scroll}
      ref={(scrollView) => {scrollView = scrollView; }}
     showsVerticalScrollIndicator={false}>
     {
      tesData && tesData.length > 0 && tesData.map(val => {
       return (
        <TouchableOpacity

             onPress={() => this.props.navigation.navigate('TestimonyPage')}>
      <View style={styles.testimonyCard} key={val.id}>
         <View style={styles.listAvatar}>
            <Image source={val.listAvatarSide} style={styles.listAvatarImg} />
          </View>
      <View style={styles.listContent}>
        <View style={styles.listTitleContainer}>
         <View style={styles.listTitleText}><Text style={{fontSize:15, fontWeight:'bold', paddingLeft:10, paddingTop:5}}>{val.testimonyTitle}</Text></View>
         <View style={styles.listLoveAvatar}><Image source={val.loveAvatar} style={styles.listLove} /></View>
        </View>
        <View style={styles.listDate}><Text style={{fontSize:9, color:'grey', padding:3, paddingLeft:10,}}>{val.testimonyDate}</Text></View>
        <View style={styles.listContentText}><Text style={{fontSize:11,flexWrap: 'wrap',color:'#333300',paddingLeft:10,}}>{val.testimonyMessage}</Text></View>
      </View>
      </View>
 </TouchableOpacity>

                 )
                   })
                 }
            </ScrollView >
     </View>




    </View>

    );
  }
}
export default Testimony;

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
CardContainer:{
 flexDirection:'column',
 position:'absolute',
 top:hp('6%'),
 width:wp('100%'),
height:hp('28%'),
paddingLeft:10

},
cardTitle:{
 marginLeft:wp('5%'),
},
cardTitleText:{
 fontSize:15,
 color:'#663300',
 fontWeight:'bold',
 fontFamily:'Arial',
},
card:{
 width:wp('70%'),
 height:hp('20%'),
marginTop:10,
marginBottom:5,


},
bgImg:{
 position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:wp('65%'),
  height:hp('21%'),
   borderRadius:10,

},
overlay: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'red',
    opacity:0.3,
    width:wp('65%'),
    height:hp('21%'),
     borderRadius:10,
  },
  loveContainer:{
   width:wp('65%'),
   height:hp('20%'),
   flexDirection:'column',
   alignItems:'flex-end',


  },
  cardInsideTitle:{
   width:wp('80%'),
   position:'absolute',
   top:hp('13%')
  },

  cardInsideTitleText:{
   color:'white',
   margin:10,
   fontSize:18,
   fontWeight:'bold',
   fontStyle:'italic',
   fontFamily:'times new roman'
  },
  cardDateContainer:{
flexDirection:'row',
position:'absolute',
 top:hp('17.5%'),
 margin:5,
  },
cardDate:{
 width:wp('50%'),
},
cardDateTime:{
  color:'white',
  fontSize:9,
},
calendarContainer:{
 width:wp('4%'),
 marginLeft:wp('1%'),
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
top:hp('12%'),
width:wp('100%'),
height:hp('84%'),
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
saintContainer:{
 flexDirection:'column',
 position:'absolute',
 top:hp('81%'),
 width:wp('100%'),
height:hp('40%'),
paddingLeft:10

},
saintTitle:{
 marginLeft:wp('2%'),
},
saintTitleText:{
 fontSize:15,
 color:'#663300',
 fontWeight:'bold',
 fontFamily:'Arial',
 marginBottom:10,
},
saintCard:{
width:wp('100%'),
height:hp('40%'),
},
saintImgContainer:{
 position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:wp('100%'),
  height:hp('25%'),
  borderRadius:10,

},
saintImg:{

  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width:wp('95%'),
  height:hp('25%'),
  borderRadius:10,
},
saintOverlay:{
 ...StyleSheet.absoluteFillObject,
 position: 'absolute',
 top: 0,
 right: 0,
 bottom: 0,
 left: 0,
 backgroundColor: 'red',
 opacity:0.3,
 width:wp('95%'),
 height:hp('25%'),
  borderRadius:10,
},
saintCaption1:{
width:wp('100%'),
position:'absolute',
top:hp('26%'),

},
saintName:{
 fontSize:25,
 fontFamily:'Arial',
 fontStyle:'italic',
 color:'#663300',
 fontWeight:'bold',
},
saintNameB:{
 fontSize:15,
 fontFamily:'Arial',
 textTransform:'uppercase',
 color:'#33334d',
  fontWeight:'bold',
},
saintBio:{
width:wp('98%'),
padding:5,
position:'absolute',
top:hp('33%')
},
saintBioText:{
fontSize:15,
flexWrap: 'wrap',
fontWeight:'bold',

}
})
