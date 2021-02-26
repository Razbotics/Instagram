const users = [
  {
    id: '1',
    userName: '__shubho__',
    name: 'Shubhankar Das',
    profileUri: 'https://picsum.photos/200',
    following: ['2', '3', '4', '5', '6'],
    followers: ['2'],
    posts: ['1', '2', '3', '4', '5', '6', '22', '23', '24'],
  },
  {
    id: '2',
    userName: 'sstable__genius',
    name: 'Dhrubesh Deb Sharma',
    profileUri: 'https://picsum.photos/200',
    following: ['1'],
    followers: ['1'],
    posts: ['7', '8', '9'],
  },
  {
    id: '3',
    userName: 'bha_vik_panchal',
    name: 'Bhavik Panchal',
    profileUri: 'https://picsum.photos/200',
    following: ['1'],
    followers: ['1'],
    posts: ['10', '11', '12'],
  },
  {
    id: '4',
    userName: 'the.enthraller',
    name: 'Shubho',
    profileUri: 'https://picsum.photos/200',
    following: ['1'],
    followers: ['1'],
    posts: ['13', '14', '15'],
  },
  {
    id: '5',
    userName: 'showstopper_khan',
    name: 'Inshaal Khan',
    profileUri: 'https://picsum.photos/200',
    following: ['1'],
    followers: ['1'],
    posts: ['16', '17', '18'],
  },
  {
    id: '6',
    userName: 'ashish_masih_10',
    name: 'Ashish Masih',
    profileUri: 'https://picsum.photos/200',
    following: ['1'],
    followers: ['1'],
    posts: ['19', '20', '21'],
  },
];

export const getUsers = () => users;

export const getUserById = (id) => users.filter((user) => user.id === id)[0];
