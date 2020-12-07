import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../Utils/Colors';

export default class QuakeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
   const {item}=this.props.route.params
    console.warn(JSON.stringify(item,0,3))
    return (
      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor:Colors.QUATERNARY ,justifyContent:"center",alignItems:"center"}}>
          <Text>Map</Text>
        </View>
        <View style={{flex:1}}>
          <Text>Map</Text>
        </View>
      </View>
    );
  }
}
