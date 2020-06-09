import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import MyHeader from "../components/MyHeader";

export default class MainScreen extends Component {
 render(){
return(
 
    <View style = {styles.container}>

          <ImageBackground source={require('../assets/back5.jpg')} style={styles.image}>
          <View style={{ flex:2 }}>
  <MyHeader title="Home" navigation={this.props.navigation} />
  </View>  

     <View style = {styles.maths1}>
      <TouchableOpacity onPress={() =>this.props.navigation.navigate('MathScreen')}
            style={styles.button}
          ><Text>MATHS</Text></TouchableOpacity>
   </View>


          <View style ={styles.science}>  
      <TouchableOpacity>
            style={styles.button1}
          ><Text>Science</Text></TouchableOpacity>
          </View> 


          <View style ={styles.eng}>   
      <TouchableOpacity
            style={styles.button2}
          ><Text>English</Text></TouchableOpacity>
          </View> 


          <View style ={styles.sst}>   
      <TouchableOpacity
            style={styles.button3}
          ><Text>SST</Text></TouchableOpacity>
          </View>      

           </ImageBackground>
           
    </View>
   
)
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6fc0b8",
    },
    image: {
        flex: 3.5,
        resizeMode: "cover",
      },
      button: {
        width: "40%",
        height: RFValue(100),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom:RFValue(10),
        marginTop:RFValue(200),
        marginLeft:RFValue(20),
        shadowOffset: {
          width: 0,
          height: 8,
        }
    },
    button1: {
      width: "40%",
      height: RFValue(100),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(25),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom:RFValue(10),
      marginTop:RFValue(-110),
      marginLeft:RFValue(200),
      shadowOffset: {
        width: 0,
        height: 8,
      }
  },
  button2: {
    width: "40%",
    height: RFValue(100),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    backgroundColor: "#ffff",
    shadowColor: "#000",
    marginBottom:RFValue(10),
    marginTop:RFValue(20),
    marginLeft:RFValue(20),
    shadowOffset: {
      width: 0,
      height: 8,
    }
},
button3: {
  width: "40%",
  height: RFValue(100),
  justifyContent: "center",
  alignItems: "center",
  borderRadius: RFValue(25),
  backgroundColor: "#ffff",
  shadowColor: "#000",
  marginTop:RFValue(-110),
  marginLeft:RFValue(200),
  shadowOffset: {
    width: 0,
    height: 8,
  }
},
    maths:{
    flex : 0.9 
    },
    maths1:{
      flex:0.0
    },
    sst:{
      flex : 500 ,
      flexDirection : "column" 
      }  
});