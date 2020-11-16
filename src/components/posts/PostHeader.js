import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
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
      <TouchableWithoutFeedback onPress={() => console.log(name)}>
        <View style={styles.name}>
          <AppText style={{fontSize: 13, fontWeight: 'bold'}}>{name}</AppText>
        </View>
      </TouchableWithoutFeedback>
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
    marginLeft: 5,
    marginRight: 15,
  },
  name: {
    flexBasis: '70%',
  },
  menu: {
    flexBasis: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostHeader;
