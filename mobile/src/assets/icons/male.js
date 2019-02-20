import React from 'react'
import { Svg } from 'expo';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const widthDP = wp('5%');

const Male = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
      <Svg.Path fill="#50C8EF" d="M279.412 311.368c-11.055-1.759-11.307-32.157-11.307-32.157s32.484-32.158 39.564-75.401c19.045 0 30.809-45.973 11.76-62.148C320.227 124.635 343.91 8 224 8c-119.911 0-96.225 116.635-95.432 133.662-19.047 16.175-7.285 62.148 11.761 62.148 7.079 43.243 39.564 75.401 39.564 75.401s-.252 30.398-11.307 32.157C132.976 317.034 0 375.686 0 440h448c0-64.314-132.977-122.966-168.588-128.632z" />
    </Svg>
)

Male.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: "0 0 448 448"
}

export default Male;
