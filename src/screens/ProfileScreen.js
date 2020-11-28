import React from 'react';
import ProfileHeader from '../components/profile/ProfileHeader';
import {getUserById} from '../api/users';
import {getPostsByUserId} from '../api/posts';
import Screen from './Screen';
import ProfileInfo from '../components/profile/ProfileInfo';
import {ScrollView} from 'react-native-gesture-handler';
import ProfilePosts from '../components/profile/ProfilePosts';

function ProfileScreen() {
  const profile = getUserById('1');
  const userPosts = getPostsByUserId('1');
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
        <ProfilePosts posts={userPosts} />
      </ScrollView>
    </Screen>
  );
}

export default ProfileScreen;
