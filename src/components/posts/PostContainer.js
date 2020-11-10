import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import PostHeader from './PostHeader';

function PostContainer({profileUri, name, postUris}) {
  return (
    <TouchableWithoutFeedback onPress={() => console.log(name)}>
      <View style={styles.container}>
        <PostHeader imageUrl={profileUri} name={name} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
});

export default PostContainer;
