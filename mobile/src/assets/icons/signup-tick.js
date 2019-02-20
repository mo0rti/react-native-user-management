import React from 'react'
import { Svg } from 'expo';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const widthDP = wp('5%');

const SignupTick = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
        <Svg.Path fill="none" stroke="#00a0c6" strokeWidth="4" d="M1.235 10.534l9.259 7.265 14.69-16.468" />
    </Svg>
)

SignupTick.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: "0 0 26.676 20.532"
}

export default SignupTick;
