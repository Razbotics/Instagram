import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Story from './Story';
import {selfProfile, stories} from '../../seed';

const getTruncName = (name) => {
  return name.length > 10 ? name.slice(0, 8) + '...' : name;
};

function StoriesBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Story
          name="Your story"
          imgUri={selfProfile.imgUri}
          showIcon={true}
          borderType="transparent"
          onPress={() => console.log('pressed your story')}
        />
        {stories.map((story) => (
          <Story
            key={story.id}
            name={getTruncName(story.name)}
            imgUri={story.imgUri}
            onPress={() => console.log('pressed', story.name)}
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
