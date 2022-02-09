import { MainStackNavigator, SearchStackNavigator, ProfileStackNavigator, SettingsStackNavigator } from "./StackNavigator";

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"  //bottom bar
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { 
          backgroundColor: '#67267A',
          height: '12%',
        },
      }}>
      <Tab.Screen
        name="SettingsStack"
        component={ SettingsStackNavigator }
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="chatbubbles" color={color} size={45} />
          ),
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={ MainStackNavigator }
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={45} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={ SearchStackNavigator }
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="ios-search" color={color} size={45} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ ProfileStackNavigator }
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="person-sharp" color={color} size={45} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

