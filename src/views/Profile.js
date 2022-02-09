import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

class Profile extends React.Component {
  render() {
    return (
			<View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.topLeftContainer}>
            <View style={styles.image}>
            </View>
            <View style={styles.points}>
            </View>
          </View>
          <View style={styles.topRightContainer}>
            <View style={styles.name}></View>
            <View style={styles.desc}></View>
            <View style={styles.descText}></View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.desc1}></View>
          <View style={styles.desc2}></View>
          <View style={styles.desc3}></View>
        </View>
      </View>
		);
  }
}

const styles = StyleSheet.create ({
  mainContainer: {
		flex: 1,
		backgroundColor: '#ede5ca',
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 8,
    paddingRight: 30,
	},
  topContainer: {
    flex: .5,
    flexDirection: 'row',
  },
  topLeftContainer: {
    flex: .5,
    flexDirection: 'column',
  },
  image: {
    flex: .8,
    backgroundColor: 'white',
    borderRadius: 70,
    marginBottom: 20,
    marginTop: 20,
  },
  points: {
    flex: .2,
    backgroundColor: 'white',
    borderWidth: 1,
    top: 10,
  },
  topRightContainer: {
    flex: .5,
    flexDirection: 'column',
  },
  name: {
    flex: .2,
    backgroundColor: 'white',
    borderWidth: 1,
    marginLeft: 15,
    marginBottom: 15,
  },
  desc: {
    flex: .2,
    backgroundColor: 'white',
    borderWidth: 1,
    marginLeft: 15,
    marginBottom: 15,
  },
  descText: {
    flex: .6,
    backgroundColor: 'white',
    borderWidth: 1,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },  
  bottomContainer: {
    flex: .5,
  },
  desc1: {
    flex: .2,
    backgroundColor: 'white',
    marginTop: 30,
    borderWidth: 1,
  },
  desc2: {
    flex: .6,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 1,
  },
  desc3: {
    flex: .2,
    backgroundColor: 'white',
    marginTop: 20,
    borderWidth: 1,
  }
});

export default Profile;