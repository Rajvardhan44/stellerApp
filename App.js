import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import React from 'react';
import {Text, View } from 'react-native';
import HomeScreen from './screens/homeScreen';
import SpaceCraftsScreen from './screens/SpaceCrafts'; 
import DailyPicScreen from './screens/DailyPic'; 
import StarMapScreen from './screens/StarMap'; 


const Stack = createStackNavigator(); 
export default function App() {
     return( 
     <NavigationContainer>
     <Stack.Navigator initialRouteName="StarMap" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Spacefrafts" component={SpaceCraftsScreen} />
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/> 
      <Stack.Screen name="StarMap" component={StarMapScreen}/> 
      </Stack.Navigator> 
      </NavigationContainer>
   ); 
}