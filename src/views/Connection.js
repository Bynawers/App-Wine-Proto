import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

/*
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
*/


const Connexion = () => {
  return (
		<View style={styles.mainContainer}>
      <Text>Connection</Text>
    </View>
	);
}

const styles = StyleSheet.create ({

	mainContainer: {
		flex: 1,
		backgroundColor: '#ede5ca',
		justifyContent: "center",
   	alignItems: "center",
   	textAlign: "center",
	},
});

export default Connexion;