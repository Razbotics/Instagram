import React, {useEffect} from 'react';
import {StatusBar, View, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import NavigationBar from 'react-native-navbar-color';

function Screen({children, style}) {
  useEffect(() => {
    NavigationBar.setColor(colors.black);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={colors.black} />
      <View style={styles.container}>
        <View style={[styles.childContainer, style]}>{children}</View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  childContainer: {
    width: '100%',
    height: '100%',
  },
});

export default Screen;
