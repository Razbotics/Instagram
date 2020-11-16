import {getUserById} from './users';
import {getPostsById} from './posts';

const stories = [
  {
    id: '1',
    userId: '2',
    postId: '2',
  },
  {
    id: '2',
    userId: '3',
    postId: '3',
  },
  {
    id: '3',
    userId: '4',
    postId: '4',
  },
  {
    id: '4',
    userId: '5',
    postId: '5',
  },
  {
    id: '5',
    userId: '6',
    postId: '6',
  },
];

export const getStories = () =>
  stories.map((story) => {
    const post = getPostsById(story.postId);
    const user = getUserById(story.userId);

    return {
      id: story.id,
      userName: user.userName,
      profileUri: user.profileUri,
      postUris: post.postUris,
    };
  });
