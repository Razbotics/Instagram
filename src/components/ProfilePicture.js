import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../constants/colors';
import {width} from '../constants/dimension';

const imageDim = width * 0.15;
const borderScaleUp = 1.1;

function ProfilePicture({uri}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: imageDim * borderScaleUp,
    height: imageDim * borderScaleUp,
    borderRadius: (imageDim * borderScaleUp) / 2,
    padding: imageDim * 0.035,
    borderWidth: imageDim * 0.02,
    borderColor: colors.orange,
  },
  image: {
    width: imageDim,
    height: imageDim,
    borderRadius: imageDim / 2,
  },
});

export default ProfilePicture;
