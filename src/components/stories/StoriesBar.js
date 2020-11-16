import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Story from './Story';
import {getStories} from '../../api/stories';
import {getUserById} from '../../api/users';

const getTruncName = (name) => {
  return name.length > 10 ? name.slice(0, 8) + '...' : name;
};

function StoriesBar() {
  const selfProfile = getUserById('1');
  const stories = getStories();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Story
          name="Your story"
          imgUri={selfProfile.profileUri}
          showIcon={true}
          borderType="transparent"
          onPress={() => console.log('pressed your story')}
        />
        {stories.map((story) => (
          <Story
            key={story.id}
            name={getTruncName(story.userName)}
            imgUri={story.profileUri}
            onPress={() => console.log('pressed', story.userName)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    padding: 5,
  },
});

export default StoriesBar;
