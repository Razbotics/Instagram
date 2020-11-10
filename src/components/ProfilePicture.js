import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../constants/colors';
import {width} from '../constants/dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfilePicture({
  uri,
  imageScale = 0.13,
  borderType = 'orange',
  showIcon = false,
  onPress,
}) {
  const styles = getStyle({
    imageScale,
    borderColor: colors[borderType],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image
          style={styles.image}
          source={{
            uri,
          }}
        />
      </TouchableWithoutFeedback>
      {showIcon && (
        <View style={styles.addStory}>
          <Icon
            name="plus"
            size={styles.addStory.width * 0.9}
            color={colors.white}
          />
        </View>
      )}
    </View>
  );
}

const getStyle = ({imageScale, borderColor}) => {
  const imageDim = width * imageScale;
  const borderScale = 1.2;
  const addBtnScale = 0.3;

  return StyleSheet.create({
    container: {
      width: imageDim * borderScale,
      height: imageDim * borderScale,
      borderRadius: (imageDim * borderScale) / 2,
      borderWidth: imageDim * 0.04,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor,
    },
    image: {
      width: imageDim,
      height: imageDim,
      borderRadius: imageDim / 2,
    },
    addStory: {
      position: 'absolute',
      top: imageDim * 0.8,
      left: imageDim * 0.8,
      width: imageDim * addBtnScale,
      height: imageDim * addBtnScale,
      borderRadius: (imageDim * addBtnScale) / 2,
      borderColor: colors.black,
      borderWidth: 1,
      backgroundColor: colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default ProfilePicture;
