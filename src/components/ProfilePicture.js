import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../constants/colors';
import {width} from '../constants/dimension';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ProfilePicture({
  uri,
  imageScale = 0.15,
  borderType = 'orange',
  showIcon = false,
}) {
  const styles = getStyle({
    imageScale,
    borderColor: colors[borderType],
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}
      />
      {showIcon && (
        <View style={styles.addStory}>
          <Text>
            <Icon
              name="plus"
              size={styles.addStory.width * 0.9}
              color={colors.white}
            />
          </Text>
        </View>
      )}
    </View>
  );
}

const getStyle = ({imageScale, borderColor}) => {
  const imageDim = width * imageScale;
  const borderScale = 1.1;
  const addBtnScale = 0.3;

  return StyleSheet.create({
    container: {
      width: imageDim * borderScale,
      height: imageDim * borderScale,
      borderRadius: (imageDim * borderScale) / 2,
      padding: imageDim * 0.035,
      borderWidth: imageDim * 0.02,
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
    },
  });
};

export default ProfilePicture;
