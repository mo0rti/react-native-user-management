import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PvhUserAvatar = ({ uri, style, small, large }) =>
  <View style={[styles.container, (small) ? styles.smallContainer : null, (large) ? styles.largeContainer : null]}>
    <View style={styles.thumbnail}></View>
    <Image
      style={[styles.avatar, (small) ? styles.smallAvatar : null, (large) ? styles.largeAvatar : null, style]}
      source={{ uri: uri }} />
  </View>

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('10%'),
    aspectRatio: 1
  },
  thumbnail: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: wp('6%'),
    backgroundColor: '#F5F5F5'
  },
  smallContainer: {
    width: wp('8%'),
  },
  largeContainer: {
    width: wp('12%'),
  },
  avatar: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: wp('5%')
  },
  smallAvatar: {
    borderRadius: wp('4%')
  },
  largeAvatar: {
    borderRadius: wp('6%')
  }
});

export default PvhUserAvatar;
