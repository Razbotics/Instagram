import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';

function HomeHeader({}) {
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <TouchableWithoutFeedback onPress={() => console.log('pressed camera')}>
          <Icon name="camera" size={25} color={colors.white} />
        </TouchableWithoutFeedback>
      </View>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-white.png')}
      />
      <View style={styles.dm}>
        <TouchableWithoutFeedback onPress={() => console.log('pressed dm')}>
          <Icon name="send" size={25} color={colors.white} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.dark,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  logo: {
    marginLeft: 10,
    marginTop: 8,
    width: '22%',
    height: 50 * 0.6,
  },
  camera: {
    marginLeft: 5,
  },
  dm: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
  },
});

export default HomeHeader;
