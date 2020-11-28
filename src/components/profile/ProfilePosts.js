import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

function ProfilePosts({posts}) {
  return (
    <View style={styles.container}>
      {posts.map((post, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{uri: post.postUris[0]}} style={styles.image} />
        </View>
      ))}
    </View>
  );
}

const imageSize = Dimensions.get('window').width / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    padding: 0.1,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ProfilePosts;
