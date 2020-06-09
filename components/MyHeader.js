import React, { Component} from 'react';
import { Header,Icon,Badge ,ImageBackground} from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      userId : firebase.auth().currentUser.email,
      value:""
    }
  }


 

  render(){
    return(
        <Header 
          leftComponent={<Icon name='bars' type='font-awesome' color='grey'  onPress={() => this.props.navigation.toggleDrawer()}/>}
          centerComponent={{ text: this.props.title, style: { color: 'grey', fontSize:20 ,fontWeight:"bold", } }}
          backgroundColor = "white" 
        />
     

)
}

}
