import React from 'react'
import { Svg } from 'expo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthDP = hp('3%');

const TextInputErrorState = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
        <Svg.G transform="translate(-328 -132)">
            <Svg.Circle fill="#ff1b1b" cx={14.5} cy={14.5} r={14.5} transform="translate(328 132)" />
            <Svg.Path fill="none" stroke="#fff" strokeWidth="2" d="M337.219 151.852L347.792 140M336.58 140.639l11.852 10.573" />
        </Svg.G>
    </Svg>
)

TextInputErrorState.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: '0 0 29 29'
}

export default TextInputErrorState;
