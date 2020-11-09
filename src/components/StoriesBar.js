import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Story from './Story';

const selfProfile = {
  name: '__shubho__',
  imgUri:
    'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119048819_378097930252595_7271537768545590772_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=9C9bazw4esMAX_Cr6vd&oh=aff1580df463bb4bfcff5ff6a29de645&oe=5FD33C10',
};

const stories = [
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
  {
    id: 5,
    name: 'showstopper_khan',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/60406122_382773165656191_5237932021581348864_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=51m7WXxfJ50AX-2N14H&_nc_tp=25&oh=00bff86dc4b9ed51dd1bf85d3903922d&oe=5FD2BABD',
  },
  {
    id: 6,
    name: 'ashish_masih_10',
    imgUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79377624_722982318231761_871827285336915968_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=BQVz2QVWHBUAX9yyBg-&_nc_tp=25&oh=766e45c26d2cf5950d0cf751ffae1e0c&oe=5FD36188',
  },
];

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
    marginTop: 10,
    padding: 5,
  },
});

export default StoriesBar;
