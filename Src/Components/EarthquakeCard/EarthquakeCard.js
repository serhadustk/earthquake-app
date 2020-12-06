import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../Utils/Colors';


export default class EarthquakeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item}=this.props
      //console.warn(item.item,0,3)
    return (
    
      <TouchableOpacity style={{flexDirection:"row",backgroundColor:"#fff",margin:2,padding:5}}>
       <View style={{justifyContent:"center",alignItems:"center"}}>
       <Fontisto name="heartbeat-alt" size={25} color={Colors.SECONDARY}/>
       <Text> {item.item.mag} </Text>
       </View>
       <View style={{flex:3,justifyContent:"center"}}>
       <Text style={{color:Colors.TITLECOLOR,fontWeight:"bold"}}> {item.item.title} </Text>
       <Text style={{color:Colors.SUBTITLECOLOR,}}> {item.item.date} </Text> 
       </View>
       <View style={{justifyContent:"center",alignItems:"center"}}>
       <Feather name="chevron-right" size={25} color={Colors.PRIMARY}/>
       </View>
      </TouchableOpacity>
    );
  }
}
