import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const Search = () => {
  return (
		<View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.searchContainer}>
					<Text adjustsFontSizeToFit={true} numberOfLines={1} 
          style={styles.maCaveText}> Search </Text>
				</TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.scanContainer}>
				  <Text adjustsFontSizeToFit={true} numberOfLines={1} 
          style={styles.maCaveText}> Scan </Text>
				  </TouchableOpacity>
      </View>
    </View>
	);
}

const styles = StyleSheet.create ({

	mainContainer: {
		flex: 1,
		backgroundColor: '#ede5ca',
	},
  topContainer: {
    flex: .3,
  },
  bottomContainer: {
    flex: .7,
  },
  searchContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: '10%',
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: '10%',
		borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
	scanContainer: { 
		backgroundColor: 'white',
		flex: 1,
		marginLeft: '10%',
		marginRight: '10%',
		marginBottom: 100,
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

export default Search;