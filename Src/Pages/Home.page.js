import Axios from 'axios';
import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar,FlatList } from 'react-native';
import EarthquakeCard from '../Components/EarthquakeCard/EarthquakeCard';
import { Colors } from '../Utils/Colors';
import {API_URL} from "../Utils/constant"
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
componentDidMount(){
  Axios.get(API_URL)
  .then(data=>{
    this.setState({data:data.data.result})
   console.warn("veri", JSON.stringify(data.data.result.length,0,3))
  })
}
  render() {
    
    return (
     <SafeAreaView style={{flex:1}}>
       
      <View style={{flex:1}}>
      <StatusBar translucent backgroundColor={Colors.TERTIARY}/>
    
          <FlatList
        data={this.state.data}
        renderItem={(item)=><EarthquakeCard item={item}/>}
        //keyExtractor={item => item.id}
      />
      </View>
     </SafeAreaView>
    );
  }
}
