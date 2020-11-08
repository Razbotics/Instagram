import React from 'react';
import {View, StyleSheet} from 'react-native';
import Story from './Story';

const stories = [
  {
    id: 1,
    name: '__shubho__',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119048819_378097930252595_7271537768545590772_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=9C9bazw4esMAX_Cr6vd&oh=aff1580df463bb4bfcff5ff6a29de645&oe=5FD33C10',
  },
  {
    id: 2,
    name: 'sstable__genius',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83060282_2671723199530629_6611752232616460288_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=NAjvCkQjPSoAX88jnlX&oh=d7e35ddb82a29041f56e9711ea4a127a&oe=5FD2517F',
  },
  {
    id: 3,
    name: 'bha_vik_panchal',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123009485_2193580054109208_8388971494855853096_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=vAVq8gfsaX4AX-HEwjO&oh=f69f1a37542306b81ffccb3e88b2c656&oe=5FCFF77F',
  },
  {
    id: 4,
    name: 'the.enthraller',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96389829_923458424765836_8582292818683232256_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=WDGo0JjohxwAX_qBX7z&oh=6a7f7824495524b05d5f1984f805592a&oe=5FD09BB3',
  },
];

function StoriesBar() {
  return (
    <View style={styles.container}>
      {stories.map((story) => (
        <Story key={story.id} name={story.name} imgUri={story.imgUri} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    padding: 10,
  },
});

export default StoriesBar;
