import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

function PostContainer({profileUri, name, postUris, postLikes}) {
  return (
    <View style={styles.container}>
      <PostHeader imageUrl={profileUri} name={name} />
      <PostImage imageUris={postUris} />
      <PostFooter likes={postLikes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
});

export default PostContainer;
