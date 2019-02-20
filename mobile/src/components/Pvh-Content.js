import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const PvhContent = ({ noPadding, style, children, ...otherProps }) =>
    <View {...otherProps}
        style={[
            styles.container,
            (noPadding) ? {} : styles.padder,
            style
        ]}>
        {children}
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'transparent'
    },
    padder: {
        paddingLeft: wp('5%'),
        paddingRight: wp('5%')
    }
});

export default PvhContent;
