import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import {getUserById} from '../api/users';
import Screen from './Screen';
import ProfileInfo from '../components/profile/ProfileInfo';
import {ScrollView} from 'react-native-gesture-handler';

function ProfileScreen() {
  const profile = getUserById('1');
  return (
    <Screen>
      <ProfileHeader userName={profile.userName} />
      <ScrollView>
        <ProfileInfo
          profileUri={profile.profileUri}
          name={profile.name}
          postsLen={profile.posts.length}
          followers={profile.followers.length}
          following={profile.following.length}
        />
      </ScrollView>
    </Screen>
  );
}

export default ProfileScreen;
