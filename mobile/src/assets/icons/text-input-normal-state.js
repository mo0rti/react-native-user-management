import React from 'react'
import { Svg } from 'expo';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthDP = hp('3%');

const TextInputNormalState = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
        <Svg.G transform="translate(-328 -132)">
            <Svg.Circle fill="#fff" cx={14.5} cy={14.5} r={14.5} transform="translate(328 132)" />
        </Svg.G>
    </Svg>
)

TextInputNormalState.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: '0 0 29 29'
}

export default TextInputNormalState;
