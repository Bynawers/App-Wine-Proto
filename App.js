import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import DrawerNavigator from './src/containers/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavigationContainer>
          <DrawerNavigator/> 
        </NavigationContainer>
      </View>
    )
  }
}