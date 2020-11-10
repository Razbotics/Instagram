import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import AppText from '../AppText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

function PostHeader({imageUrl, name}) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ProfilePicture
          uri={imageUrl}
          imageScale={0.1}
          borderType="transparent"
        />
      </View>
      <View style={styles.name}>
        <AppText style={{fontSize: 12}}>{name}</AppText>
      </View>
      <View style={styles.menu}>
        <Icon name="dots-vertical" size={25} color={colors.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flexBasis: '10%',
    marginRight: 15,
  },
  name: {
    flexBasis: '75%',
  },
  menu: {
    flexBasis: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostHeader;
