import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

const Social = () => {
  return (
		<View style={styles.mainContainer}>
      <Text>Social Menu</Text>
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
	topContainer: {
		height: '17%',
		backgroundColor: '#67267A'
	},
	bottomContainer: {
		height: '15%',
		marginTop: 'auto',
		backgroundColor: '#67267A',
	},
});

export default Social;