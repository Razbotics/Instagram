import React from 'react';
import {View, StyleSheet, TouchableHighlight} from 'react-native';
import colors from '../../constants/colors';
import AppText from '../AppText';
import ProfilePicture from '../ProfilePicture';
import InfoComponent from './InfoComponent';

function ProfileInfo({profileUri, name, postsLen, following, followers}) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <ProfilePicture
          uri={profileUri}
          imageScale={0.24}
          borderType="transparent"
        />
        <View style={styles.infoContainer}>
          <InfoComponent label="Posts" data={postsLen} />
          <InfoComponent label="Followers" data={following} />
          <InfoComponent label="Following" data={followers} />
        </View>
      </View>
      <View style={styles.status}>
        <AppText style={styles.name}>{name}</AppText>
        <View style={styles.statusTextContainer}>
          <AppText style={styles.statusText}>
            Welcome to Instagram Clone, built with React Native.
          </AppText>
        </View>
      </View>
      <TouchableHighlight onPress={() => console.log('editProfile')}>
        <View style={styles.editProfile}>
          <AppText style={{fontWeight: 'bold'}}>Edit Profile</AppText>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  info: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 15,
  },
  status: {
    paddingLeft: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  statusText: {
    fontSize: 13,
    fontWeight: '200',
  },
  statusTextContainer: {
    marginTop: 5,
    width: '50%',
  },
  editProfile: {
    padding: 5,
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default ProfileInfo;
