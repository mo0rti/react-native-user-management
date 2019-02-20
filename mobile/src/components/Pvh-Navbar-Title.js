import React from 'react';
import { View, StyleSheet } from "react-native";
import Colors from '@Constants/Colors';
import PvhText from './Pvh-Text';

const PvhNavbarTitle = (props) => (
    <View style={styles.container}>
        <PvhText
            small
            style={[styles.caption]}>
            {props.caption}
        </PvhText>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    caption: {
        color: Colors.pageTitle
    }
});

export default PvhNavbarTitle;
