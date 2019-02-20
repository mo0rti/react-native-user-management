import React from 'react'
import { Svg } from 'expo';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const widthDP = wp('5%');

const Female = ({ width, height, viewBox }) => (
    <Svg width={width} height={height} viewBox={viewBox}>
      <Svg.Path fill="#F05228" d="M421.184 384.96l-81.728-20.437-4.715-18.88c56.384-9.493 85.397-26.389 86.677-27.136 3.029-1.771 4.907-4.992 5.163-8.491.235-3.499-1.323-6.933-4.075-9.131C422.123 300.587 384 269.099 384 160c0-92.011-21.525-138.667-64-138.667h-6.293C298.389 6.528 286.891 0 256 0c-40.085 0-128 40.299-128 160 0 109.099-38.123 140.587-38.4 140.8a10.703 10.703 0 0 0-4.267 9.067 10.66 10.66 0 0 0 5.163 8.597c1.28.768 30.016 17.749 86.741 27.221l-4.715 18.837-81.727 20.438C37.333 398.336 0 446.165 0 501.333 0 507.221 4.779 512 10.667 512h490.667c5.888 0 10.667-4.821 10.667-10.709a119.728 119.728 0 0 0-90.817-116.331z" />
    </Svg>
)

Female.defaultProps = {
    width: widthDP,
    height: widthDP,
    viewBox: "0 0 512 512"
}

export default Female;
