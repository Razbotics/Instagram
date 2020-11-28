const users = [
  {
    id: '1',
    userName: '__shubho__',
    name: 'Shubhankar Das',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/119048819_378097930252595_7271537768545590772_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=9C9bazw4esMAX_Cr6vd&oh=aff1580df463bb4bfcff5ff6a29de645&oe=5FD33C10',
    following: ['2', '3', '4', '5', '6'],
    followers: ['2'],
    posts: ['1', '2', '3', '4', '5', '6'],
  },
  {
    id: '2',
    userName: 'sstable__genius',
    name: 'Dhrubesh Deb Sharma',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83060282_2671723199530629_6611752232616460288_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=NAjvCkQjPSoAX88jnlX&oh=d7e35ddb82a29041f56e9711ea4a127a&oe=5FD2517F',
    following: ['1'],
    followers: ['1'],
    posts: ['7', '8', '9'],
  },
  {
    id: '3',
    userName: 'bha_vik_panchal',
    name: 'Bhavik Panchal',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/123009485_2193580054109208_8388971494855853096_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=vAVq8gfsaX4AX-HEwjO&oh=f69f1a37542306b81ffccb3e88b2c656&oe=5FCFF77F',
    following: ['1'],
    followers: ['1'],
    posts: ['10', '11', '12'],
  },
  {
    id: '4',
    userName: 'the.enthraller',
    name: 'Shubho',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/96389829_923458424765836_8582292818683232256_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=WDGo0JjohxwAX_qBX7z&oh=6a7f7824495524b05d5f1984f805592a&oe=5FD09BB3',
    following: ['1'],
    followers: ['1'],
    posts: ['13', '14', '15'],
  },
  {
    id: '5',
    userName: 'showstopper_khan',
    name: 'Inshaal Khan',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/60406122_382773165656191_5237932021581348864_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=51m7WXxfJ50AX-2N14H&_nc_tp=25&oh=00bff86dc4b9ed51dd1bf85d3903922d&oe=5FD2BABD',
    following: ['1'],
    followers: ['1'],
    posts: ['16', '17', '18'],
  },
  {
    id: '6',
    userName: 'ashish_masih_10',
    name: 'Ashish Masih',
    profileUri:
      'https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79377624_722982318231761_871827285336915968_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=BQVz2QVWHBUAX9yyBg-&_nc_tp=25&oh=766e45c26d2cf5950d0cf751ffae1e0c&oe=5FD36188',
    following: ['1'],
    followers: ['1'],
    posts: ['19', '20', '21'],
  },
];

export const getUsers = () => users;

export const getUserById = (id) => users.filter((user) => user.id === id)[0];
