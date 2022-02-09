import React from "react";

import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useState } from "react";

import TabNavigator from "./TabNavigator";
import Connection from "../views/Connection";
import About from "../views/About";

const optionStyle = {
  headerStyle: {
    backgroundColor: '#67267A',
    height: 100,
  },
  headerShown: true,
  swipeEdgeWidth: 100,
  headerTintColor: "white",
  headerBackTitle: "Back",
  headerTitleAlign: 'center',
  drawerType: 'front',
  DrawerItem: {
    activeTintColor: 'red',
  }
};

const Drawer = createDrawerNavigator();

export function DrawerContent({ navigation }) {

  const [colorConnection, setColorConnection] = useState(0);

  const connectionButton = {
    flex: .15,
    paddingLeft: '10%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: (colorConnection === 1) ? '#7C2A7F' : '#6C2C7C',
  }

  const homeButton = {
    flex: .15,
    paddingLeft: '10%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: (colorConnection === 0) ? '#7C2A7F' : '#6C2C7C',
  }

  const homeAbout = {
    flex: .15,
    paddingLeft: '10%',
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: (colorConnection === 2) ? '#7C2A7F' : '#6C2C7C',
  }

  return(
    <View style={styles.mainContainer}>

      <View style={styles.topContainer}/>

      <View style={styles.appContainer}>
        <Image source={require('../assets/icons/logo.png')}
				  resizeMode='contain'
				  style={styles.logoApp}
				/>
        <Text style={styles.titleApp}> D C X I I </Text>
      </View>

      <View style={styles.bottomContainer}>

        <TouchableOpacity 
        style={connectionButton}
        onPress={() => {navigation.navigate("Connection"); setColorConnection(1)}}>
          <Icon name="cloud" color={'white'} size={35} style={styles.drawerLogo}/>
          <Text style={styles.drawerText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeButton}
          onPress={() => {navigation.navigate("Ma Cave"); setColorConnection(0)}}>
          <Icon name="wine-glass-alt" color={'white'} size={35} style={styles.drawerLogo}/>
          <Text style={styles.drawerText}>Mes vins</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={homeButton}
          onPress={() => {navigation.navigate("About"); setColorConnection(2)}}>
          <Icon name="question" color={'white'} size={35} style={styles.drawerLogo}/>
          <Text style={styles.drawerText}>A propos</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={optionStyle}
    drawerContent={props => <DrawerContent { ...props} />}>
      <Drawer.Screen name="Ma Cave" component={TabNavigator}/>
      <Drawer.Screen name="Connection" component={Connection} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create ({

	mainContainer: {
		flex: 1,
	},
  topContainer: {
    flex: .15,
    backgroundColor: '#67267A',
  },
  appContainer: { 
    flex: .25,
    backgroundColor: '#57267A',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
  },
  bottomContainer: { 
    flex: .65,
    backgroundColor: '#67267A',
    flexDirection: 'column',
  },
  logoApp: {
    flex: .35,
    marginLeft: '5%',
		height: '100%',
		tintColor: 'white',
	},
  titleApp: {
    flex: .65,
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  drawerLogo: {
  	textAlign: "center",
    width: '20%',
  },
  drawerText: {
    fontSize: 20,
    left: '20%',
    color: 'white',
  },
});

export default DrawerNavigator;