import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

const About = () => {
  return (
		<View style={styles.mainContainer}>
      <Text>About</Text>
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

export default About;