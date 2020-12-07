// import Axios from 'axios';
// import React, { Component } from 'react';
// import { View, Text, SafeAreaView } from 'react-native';
// import { API_URL } from './Src/Utils/constant';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data:[]
//     };
//   }
// componentDidMount(){
//   Axios.get(API_URL)
//   .then(data=>{
//     console.warn(JSON.stringify(data.data,0,3))
//     this.setState({data:data.data})
//   })
// }
//   render() {
//     return (
//       <SafeAreaView style={{flex:1}}>
//       <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//         <Text> {JSON.stringify(this.state.data,0,3)} </Text>
//       </View>
//       </SafeAreaView>
//     );
//   }
// }
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Src/Navigation/Navigation';
import 'react-native-gesture-handler';
export default function App() {
  return (
    <NavigationContainer>
     <Navigation/>
      </NavigationContainer> 
  );
}