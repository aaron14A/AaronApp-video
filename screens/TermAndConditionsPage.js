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

export default class TermAndConditionsPage extends Component {
 render(){
return(
  
    <View style = {styles.container}>
          <ImageBackground source={require('../assets/back5.jpg')} style={styles.image}>
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
        height: RFValue(700),
    }
});