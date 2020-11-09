import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import AppText from './AppText';
import ProfilePicture from './ProfilePicture';

function Story({name, imgUri, ...otherProps}) {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imgUri} {...otherProps} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{name}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    padding: 2,
  },
  text: {
    fontSize: 12,
    fontWeight: 'normal',
  },
});

export default Story;
