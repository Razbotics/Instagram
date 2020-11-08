import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import ProfilePicture from './ProfilePicture';

function Story({name, imgUri}) {
  const getTruncName = () => {
    return name.length > 10 ? name.slice(0, 10) + '...' : name;
  };

  return (
    <View style={styles.container}>
      <ProfilePicture uri={imgUri} />
      <View style={styles.textContainer}>
        <AppText style={styles.text}>{getTruncName()}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
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
