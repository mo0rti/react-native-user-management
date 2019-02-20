import React from 'react';
import { TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PvhText from "./Pvh-Text";

const PvhButton = ({ style, caption, bordered, dark, small, labelStyle, ...otherProps }) => (
    <TouchableOpacity {...otherProps}
        style={[
            styles.container,
            bordered ? (dark) ? styles.borderdDark : styles.bordered : null,
            small ? styles.small : null,
            style
        ]} >
        <PvhText style={[styles.label, labelStyle]}>
            {caption}
        </PvhText>
    </TouchableOpacity>
);

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#00A0C6',
        justifyContent: 'center',
        alignItems: 'center',
        height: wp('9%'),
        borderRadius: wp('4.5%')
    },
    small: {
        height: hp('5%'),
        borderRadius: hp('2.5%'),
    },
    bordered: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: "2rem",
    },
    borderdDark: {
        backgroundColor: 'transparent',
        borderColor: '#00A0C6',
        borderWidth: "2rem",
    },
    label: {
        paddingBottom: "2rem",
        color: 'white'
    }
});

export default PvhButton;
