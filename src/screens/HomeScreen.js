import React from 'react';
import {StyleSheet} from 'react-native';
import StoriesBar from '../components/StoriesBar';
import Screen from './Screen';

function HomeScreen({}) {
  return (
    <Screen>
      <StoriesBar />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
