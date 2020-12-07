import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Home from '../Pages/Home.page';
import Map from '../Pages/Map.page';
import Statistics from '../Pages/Statistics.page';
import { Colors } from '../Utils/Colors';
import QuakeDetail from '../Pages/QuakeDetail.page';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor:Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size,focused }) => (<Fontisto name="heartbeat" size={size} color={color} />),
          tabBarLabel: 'Depremler',
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
            
          tabBarIcon: ({ color, size }) => (<Feather name="map-pin" size={size} color={color} />),
          tabBarLabel: 'Harita',
          
        }}
      />
       <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({ color, size }) => (<AntDesign name="barschart" size={size} color={color} />),
          tabBarLabel: 'İstatistik',
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: true }}
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: true ,
            headerTitle:"Depremler" ,
            headerTintColor:"#fff",
            headerStyle:{
                backgroundColor: Colors.PRIMARY,
            }
        }}
      />
      <Stack.Screen
        name="QuakeDetail"
        component={QuakeDetail}
        options={{ headerShown: true,
            headerTitle:"Deprem Detayı",
            headerTintColor:"#fff",
            headerStyle:{
                backgroundColor: Colors.PRIMARY,
            }
        
        }}
      
      />
      {/* 
      <Stack.Screen
        name="MapDetail"
        component={MapDetail}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

export default Navigation;