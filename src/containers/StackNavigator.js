import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "../views/Main";
import Settings from '../views/Social';
import Search from '../views/Search';
import Profile from '../views/Profile';
import MaCave from "../views/MaCave";

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Main" >
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Ma Cave" component={MaCave}/>
    </Stack.Navigator>
  );
}

const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  );
}

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search}/>
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, SearchStackNavigator, ProfileStackNavigator, SettingsStackNavigator };