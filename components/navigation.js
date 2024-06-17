import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Todolist from './Todolist';
import GstCalculator from './GstCalculator';
import Header from './Header';
import Sidebar from './Sidebar';

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Header" component={Header} />
         <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="todolist" component={Todolist} /> 
        <Stack.Screen name="Gst" component={GstCalculator} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;