import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';

function PostImage({imageUris}) {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      containerStyle={styles.container}
      loadMinimal
      loadMinimalSize={1}>
      {imageUris.map((uri, index) => (
        <Image key={index} source={{uri}} style={styles.image} />
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
    height: 300,
  },
  image: {
    width: '100%',
    height: 300,
  },
});

export default PostImage;
