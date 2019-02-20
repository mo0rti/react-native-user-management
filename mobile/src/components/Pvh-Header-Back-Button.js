import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import Dimensions from '@Constants/Dimensions';
import BackIcon from '@Assets/icons/back.png';

const PvhHeaderBackButton = ({ onPress }) =>
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={BackIcon} />
    </TouchableOpacity>

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.navbarHeight,
        paddingLeft: 15,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PvhHeaderBackButton;
