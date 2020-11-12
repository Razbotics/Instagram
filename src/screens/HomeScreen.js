import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Post from '../components/posts/Post';
import Screen from './Screen';

function HomeScreen({navigation}) {
  return (
    <Screen>
      <HomeHeader navigation={navigation} />
      <Post />
    </Screen>
  );
}

export default HomeScreen;
