import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';
import AppText from '../AppText';

function PostFooter({likes = 0, isLiked}) {
  const size = 28;
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <View style={styles.like}>
          <Icon name="heart-outline" size={size} color={colors.white} />
        </View>
        <View style={styles.comment}>
          <Icon name="comment-outline" size={size} color={colors.white} />
        </View>
        <View style={styles.share}>
          <IconFeather name="send" size={size} color={colors.white} />
        </View>
        <View style={styles.bookmark}>
          <Icon name="bookmark-outline" size={size} color={colors.white} />
        </View>
      </View>
      <View style={styles.likeContainer}>
        <AppText>{likes} Likes</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
  },
  icons: {
    flexDirection: 'row',
    padding: 10,
  },
  like: {
    marginRight: 10,
  },
  comment: {
    marginRight: 10,
  },
  share: {
    marginRight: 10,
  },
  bookmark: {
    flex: 1,
    alignItems: 'flex-end',
  },
  likeContainer: {
    width: '100%',
    height: 20,
    paddingLeft: 15,
    justifyContent: 'center',
  },
});

export default PostFooter;
