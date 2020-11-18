import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppText from '../AppText';

function ProfileHeader({userName}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>__shubho__</AppText>
      <View style={styles.icons}>
        <Icon name="plus" size={30} color={Colors.white} />
        <Icon name="menu" size={30} color={Colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProfileHeader;
