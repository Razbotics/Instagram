import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PostContainer from './PostContainer';
import {stories} from '../../seed';

function Post({}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PostContainer profileUri={item.imgUri} name={item.name} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Post;
