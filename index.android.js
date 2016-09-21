/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/


import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 TextInput,
 View
} from 'react-native';

class TodoDemo extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : 'abc'
    };
    this.getUserData = this._getUserData.bind(this);
  }

  _getUserData(key){
    fetch(`http://brucezz.leanapp.cn/${key}`)
     .then( (response) => response.json())
     //.then( (data) => console.log(data) )
     .then( (json) => json.message)
     .then( (json) => this.setState({data: json}))
  }

 render() {

   return (
     <View style={styles.container}>
       <Text style={styles.header}>
         Todos
       </Text>
       <TextInput
         style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
         onSubmitEditing = {(text) => this.getUserData(text.nativeEvent.text)}
         />
       <Text style={styles.instructions}>
         {this.state.data}
       </Text>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
 },
 header: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
});

AppRegistry.registerComponent('TodoDemo', () => TodoDemo);
