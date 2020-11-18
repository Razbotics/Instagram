import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from '../AppText';

function InfoComponent({label, data}) {
  return (
    <View style={styles.container}>
      <AppText style={styles.data}>{data}</AppText>
      <AppText style={styles.label}>{label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  label: {
    fontSize: 17,
    fontWeight: 'normal',
  },
  data: {
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default InfoComponent;
