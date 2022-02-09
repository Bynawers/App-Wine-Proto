import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity 
  	    style={styles.maCaveContainer}
    	  onPress={() => navigation.navigate("Ma Cave")}>
          <Text adjustsFontSizeToFit={true} numberOfLines={1} 
		        style={styles.maCaveText}> Ma Cave </Text>
      </TouchableOpacity>
	  </View>
  );
}

const styles = StyleSheet.create ({

	mainContainer: {
		flex: 1,
		backgroundColor: '#ede5ca',
	},
	maCaveContainer: { 
		backgroundColor: 'white',
		top: '10%',
		marginLeft: '10%',
		marginRight: '10%',
		height: '50%',
		borderRadius: 40,
		justifyContent: "center",
		alignItems: "center",
	},
	maCaveText: {
		textAlignVertical: "center",
		textAlign: 'center',
		fontSize: 40,
	}
});

export default Main;