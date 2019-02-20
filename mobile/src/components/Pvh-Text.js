import React from 'react';
import { Text } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Settings from '@Constants/Settings';

class PvhText extends React.Component {
    render() {
        let { xxlarge, xlarge, large, small, xsmall, xxsmall, xxxsmall, style } = this.props;

        let fontStyle = styles.normal;
        if (xxlarge) fontStyle = styles.xxlarge;
        if (xlarge) fontStyle = styles.xlarge;
        if (large) fontStyle = styles.large;
        if (small) fontStyle = styles.small;
        if (xsmall) fontStyle = styles.xsmall;
        if (xxsmall) fontStyle = styles.xxsmall;
        if (xxxsmall) fontStyle = styles.xxxsmall;

        return (
            <Text
                {...this.props}
                style={[
                    styles.caption,
                    fontStyle,
                    style
                ]}
            />
        );
    }
}

const styles = EStyleSheet.create({
    caption: {
        fontFamily: Settings.FONT_FAMILY,
        color: '#313131'
    },
    xxlarge: {
        fontSize: '24rem'
    },
    xlarge: {
        fontSize: '20rem'
    },
    large: {
        fontSize: '15rem'
    },
    normal: {
        fontSize: '13rem'
    },
    small: {
        fontSize: '11rem'
    },
    xsmall: {
        fontSize: '9rem'
    },
    xxsmall: {
        fontSize: '7rem'
    },
    xxxsmall: {
        fontSize: '6rem'
    }
});

export default PvhText;