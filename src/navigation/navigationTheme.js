import {DarkTheme} from '@react-navigation/native';
import colors from '../constants/colors';

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
  },
};

export default navigationTheme;
