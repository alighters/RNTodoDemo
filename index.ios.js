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

  componentDidMount(){
    fetch('http://brucezz.leanapp.cn/david')
     .then(function(data){
       console.log(data)
     })
  }

 render() {

   return (
     <View style={styles.container}>
       <Text style={styles.header}>
         Todos
       </Text>
       <TextInput
         style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
         />
       <Text style={styles.instructions}>
         Double tap R on your keyboard to reload,{'\n'}
         Shake or press menu button for dev menu
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
