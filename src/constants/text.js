import {Platform} from 'react-native';
import colors from './colors';

export default {
  fontSize: 16,
  color: colors.white,
  fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
};
