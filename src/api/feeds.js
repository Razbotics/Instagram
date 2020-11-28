import {getUserById} from './users';
import {getPostsById} from './posts';

const feeds = [
  {
    id: '1',
    postId: '2',
  },
  {
    id: '2',
    postId: '7',
  },
  {
    id: '3',
    postId: '10',
  },
  {
    id: '4',
    postId: '17',
  },
  {
    id: '5',
    postId: '20',
  },
];

export const getUserFeeds = () =>
  feeds.map((feed) => {
    const post = getPostsById(feed.postId);
    const user = getUserById(post.userId);

    return {
      id: feed.id,
      userName: user.userName,
      profileUri: user.profileUri,
      postUris: post.postUris,
      postLikes: post.likes,
    };
  });
