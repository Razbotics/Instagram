import React from 'react';
import HomeHeader from '../components/HomeHeader';
import StoriesBar from '../components/StoriesBar';
import Screen from './Screen';

function HomeScreen({}) {
  return (
    <Screen>
      <HomeHeader />
      <StoriesBar />
    </Screen>
  );
}

export default HomeScreen;
