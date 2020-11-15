import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import routes from '../navigation/routes';

function HomeHeader({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.camera}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.CAMERA)}>
          <Icon name="camera" size={30} color={colors.white} />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo-white.png')}
        />
      </View>
      <View style={styles.chats}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate(routes.CHAT)}>
          <Icon name="send" size={30} color={colors.white} />
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
    height: 60,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 40,
  },
  camera: {
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chats: {
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeHeader;
