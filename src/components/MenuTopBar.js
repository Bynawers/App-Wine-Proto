import React from 'react'
import {StyleSheet, View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerTopBar from '../Navigation/DrawerTopBar';

const MenuTopBar = () => {
  return (
		<View style={styles.mainContainer}>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/icons/logo.png')}
				resizeMode='contain'
				style={styles.logo}
				/>
			</View>
			<View style={styles.paramContainer}>
				<DrawerTopBar/>
				<TouchableOpacity>
					<Icon name="reorder-three-outline" color={'white'} size={80} />
				</TouchableOpacity>
			</View>
    </View>
	);
}

const styles = StyleSheet.create ({

	mainContainer: {
		position: 'relative',
		flex: .2,
		backgroundColor: '#67267A',
		flexDirection: 'row',
	},
	logoContainer: {
		flex: .35,
	},
	logo: {
		height: '60%',
		tintColor: '#8F267B',
		flexWrap: 'wrap',
		aspectRatio: 1,
		top: 45,
		left: 5,
	},
	paramContainer: {
		position: 'absolute',
		right: 15,
		top: 45,
	}
});

export default MenuTopBar;