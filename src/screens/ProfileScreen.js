import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import {getUserById} from '../api/users';
import Screen from './Screen';
import ProfileInfo from '../components/profile/ProfileInfo';

function ProfileScreen() {
  const profile = getUserById('1');
  return (
    <Screen>
      <ProfileHeader userName={profile.userName} />
      <ProfileInfo
        profileUri={profile.profileUri}
        name={profile.name}
        postsLen={profile.posts.length}
        followers={profile.followers.length}
        following={profile.following.length}
      />
    </Screen>
  );
}

export default ProfileScreen;
