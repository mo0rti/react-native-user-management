import React from 'react'
import { Svg } from 'expo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthDP = hp('3%');

const TextInputValidState = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
        <Svg.G transform="translate(-328 -132)">
            <Svg.Circle fill="#8ee879" cx={14.5} cy={14.5} r={14.5} transform="translate(328 132)" />
            <Svg.Path fill="none" stroke="#fff" strokeWidth="2" d="M333.556 146.624l6.664 5.229 10.573-11.852" />
        </Svg.G>
    </Svg>
)

TextInputValidState.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: '0 0 29 29'
}

export default TextInputValidState;
