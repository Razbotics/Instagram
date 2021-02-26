export const posts = [
  {
    id: '1',
    userId: '1',
    likes: 100,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '2',
    userId: '1',
    likes: 210,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '3',
    userId: '1',
    likes: 150,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '4',
    userId: '1',
    likes: 185,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '5',
    userId: '1',
    likes: 196,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '6',
    userId: '1',
    likes: 178,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },

  {
    id: '7',
    userId: '2',
    likes: 100,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '8',
    userId: '2',
    likes: 210,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '9',
    userId: '2',
    likes: 150,
    postUris: ['https://loremflickr.com/640/360'],
  },

  {
    id: '10',
    userId: '3',
    likes: 100,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '11',
    userId: '3',
    likes: 210,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '12',
    userId: '3',
    likes: 150,
    postUris: ['https://loremflickr.com/640/360'],
  },

  {
    id: '13',
    userId: '4',
    likes: 100,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '14',
    userId: '4',
    likes: 210,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '15',
    userId: '4',
    likes: 150,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },

  {
    id: '16',
    userId: '5',
    likes: 100,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '17',
    userId: '5',
    likes: 210,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '18',
    userId: '5',
    likes: 150,
    postUris: ['https://loremflickr.com/640/360'],
  },

  {
    id: '19',
    userId: '6',
    likes: 100,
    postUris: ['https://loremflickr.com/640/360'],
  },
  {
    id: '20',
    userId: '6',
    likes: 210,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '21',
    userId: '6',
    likes: 150,
    postUris: ['https://loremflickr.com/640/360'],
  },

  {
    id: '22',
    userId: '1',
    likes: 100,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '23',
    userId: '1',
    likes: 210,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    id: '24',
    userId: '1',
    likes: 150,
    postUris: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
];

export const getPosts = () => posts;

export const getPostsById = (id) => posts.filter((post) => post.id === id)[0];

export const getPostsByUserId = (id) =>
  posts.filter((post) => post.userId === id);
