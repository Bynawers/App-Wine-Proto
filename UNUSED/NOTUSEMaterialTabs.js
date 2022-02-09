import React from 'react';
import { createAppContainer } from 'react-navigation';  
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Main from '../src/views/Main';
import Settings from '../src/views/Social';
import Search from '../src/views/Search';
import Profile from '../src/views/Profile';


const tabs = createMaterialTopTabNavigator({
	Main: { screen: Main, 
		navigationOptions: {
			tabBarIcon: ({tintColor}) => (
				<Icon name="ios-home" color={tintColor} size={40} />
			)
		}
	 },
	Settings: { screen: Settings,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => (
				<Icon name="chatbubbles" color={tintColor} size={40} />
			)
		}
	},
	Search: { screen: Search,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => (
				<Icon name="ios-search" color={tintColor} size={40} />
			)
		}
	},
	Profile: { screen: Profile,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => (
				<Icon name="person-sharp" color={tintColor} size={40} />
			)
		}
	},
},{
	initialRouteName: 'Main',
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	showLabel: false,
	order: ['Settings', 'Main', 'Search', 'Profile'],
	tabBarOptions: {
		activeTintColor: 'orange',
		inactiveTintColor: 'white',
		showLabel: false,
		style: {
			backgroundColor: '#67267A',
			height: '11%',
		},
		iconStyle: {
			width: 40,
			height: 40,
		},
		indicatorStyle: {
			height: 0,
		},
		showIcon: true,
	}
}
);


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      screenOptions={{
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarLabelStyle: { 
          fontSize: 12,
        },
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


export default createAppContainer(tabs);

