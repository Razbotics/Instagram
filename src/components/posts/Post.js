import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PostContainer from './PostContainer';
import {getUserFeeds} from '../../api/feeds';
import StoriesBar from '../stories/StoriesBar';

function Post() {
  const [refreshing, setRefreshing] = useState(false);
  const userFeeds = getUserFeeds();

  return (
    <View style={styles.container}>
      <FlatList
        data={userFeeds}
        ListHeaderComponent={() => <StoriesBar />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PostContainer
            profileUri={item.profileUri}
            name={item.userName}
            postUris={item.postUris}
            postLikes={item.postLikes}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(false);
        }}
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
