import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../Utils/Colors';
import HomeController from '../../Controllers/Home.controller';


export default class EarthquakeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item}=this.props
      //console.warn(this.props)
    return (
    
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("QuakeDetail",item)} 
      activeOpacity={0.8}
      style={{flexDirection:"row",backgroundColor:"#fff",margin:1,padding:5,shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      
      elevation: 3,}}>
       <View style={{justifyContent:"center",alignItems:"center"}}>
       <Fontisto name="heartbeat-alt" size={25} color={Colors.RED}/>
       <Text style={{color:HomeController.degreeColor(item.item.mag),fontWeight:"bold"}}> {item.item.mag} </Text>
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
