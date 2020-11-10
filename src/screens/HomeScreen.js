import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Post from '../components/posts/Post';
import Screen from './Screen';

function HomeScreen({}) {
  return (
    <Screen>
      <HomeHeader />
      <Post />
    </Screen>
  );
}

export default HomeScreen;
