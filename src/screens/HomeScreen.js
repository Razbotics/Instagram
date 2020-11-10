import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Post from '../components/posts/Post';
import StoriesBar from '../components/stories/StoriesBar';
import Screen from './Screen';

function HomeScreen({}) {
  return (
    <Screen>
      <HomeHeader />
      <StoriesBar />
      <Post />
    </Screen>
  );
}

export default HomeScreen;
