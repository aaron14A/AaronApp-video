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

export default class MathScreen extends Component {
 render(){
return(
    <View style = {styles.container}>
       <View style={{ flex: 0.1 }}>
  <MyHeader title="MTestScreen" navigation={this.props.navigation} />
  </View>
      <ImageBackground source={require('../assets/back13.jpg')} style={styles.image}>
  <Text>Hi Everyday this app is made so that people can connact to each other</Text>
        </ImageBackground> 

    </View>
   
)
 }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
    image: {
      flex: 3.5,
      resizeMode: "cover",
      height: RFValue(700),
    }
});