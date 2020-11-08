import React from 'react';
import {Text} from 'react-native';
import textStyle from '../constants/text';

function AppText({style, children, ...otherProps}) {
  return (
    <Text style={[textStyle, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
