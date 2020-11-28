export const posts = [
  {
    id: '1',
    userId: '1',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/d7ccdb2e21edfc1c264e2d6022551796_full.jpg',
    ],
  },
  {
    id: '2',
    userId: '1',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '3',
    userId: '1',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/4e8da1afd32c378854692d4643397b7d_full.jpg',
    ],
  },
  {
    id: '4',
    userId: '1',
    likes: 185,
    postUris: [
      'https:/donewithit.razbotics.com/assets/810789c81e2226a3cfb8203181241cba_full.jpg',
    ],
  },
  {
    id: '5',
    userId: '1',
    likes: 196,
    postUris: [
      'https:/donewithit.razbotics.com/assets/f3e87124b7af3dcd07cdc4e7c8b686a5_full.jpg',
      'https:/donewithit.razbotics.com/assets/7b15f9968bbcecd558a3028da9725712_full.jpg',
    ],
  },
  {
    id: '6',
    userId: '1',
    likes: 178,
    postUris: [
      'https:/donewithit.razbotics.com/assets/e5eeef695d5918e9c1ce59315be21e13_full.jpg',
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },

  {
    id: '7',
    userId: '2',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/f3e87124b7af3dcd07cdc4e7c8b686a5_full.jpg',
      'https:/donewithit.razbotics.com/assets/7b15f9968bbcecd558a3028da9725712_full.jpg',
    ],
  },
  {
    id: '8',
    userId: '2',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '9',
    userId: '2',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/4e8da1afd32c378854692d4643397b7d_full.jpg',
    ],
  },

  {
    id: '10',
    userId: '3',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/d7ccdb2e21edfc1c264e2d6022551796_full.jpg',
    ],
  },
  {
    id: '11',
    userId: '3',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/f3e87124b7af3dcd07cdc4e7c8b686a5_full.jpg',
      'https:/donewithit.razbotics.com/assets/7b15f9968bbcecd558a3028da9725712_full.jpg',
    ],
  },
  {
    id: '12',
    userId: '3',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/4e8da1afd32c378854692d4643397b7d_full.jpg',
    ],
  },

  {
    id: '13',
    userId: '4',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/d7ccdb2e21edfc1c264e2d6022551796_full.jpg',
    ],
  },
  {
    id: '14',
    userId: '4',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '15',
    userId: '4',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/f3e87124b7af3dcd07cdc4e7c8b686a5_full.jpg',
      'https:/donewithit.razbotics.com/assets/7b15f9968bbcecd558a3028da9725712_full.jpg',
    ],
  },

  {
    id: '16',
    userId: '5',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/e5eeef695d5918e9c1ce59315be21e13_full.jpg',
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '17',
    userId: '5',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '18',
    userId: '5',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/4e8da1afd32c378854692d4643397b7d_full.jpg',
    ],
  },

  {
    id: '19',
    userId: '6',
    likes: 100,
    postUris: [
      'https:/donewithit.razbotics.com/assets/d7ccdb2e21edfc1c264e2d6022551796_full.jpg',
    ],
  },
  {
    id: '20',
    userId: '6',
    likes: 210,
    postUris: [
      'https:/donewithit.razbotics.com/assets/e5eeef695d5918e9c1ce59315be21e13_full.jpg',
      'https:/donewithit.razbotics.com/assets/ab00c8aa0dfb994d75730f051053b612_full.jpg',
    ],
  },
  {
    id: '21',
    userId: '6',
    likes: 150,
    postUris: [
      'https:/donewithit.razbotics.com/assets/4e8da1afd32c378854692d4643397b7d_full.jpg',
    ],
  },
];

export const getPosts = () => posts;

export const getPostsById = (id) => posts.filter((post) => post.id === id)[0];

export const getPostsByUserId = (id) =>
  posts.filter((post) => post.userId === id);
