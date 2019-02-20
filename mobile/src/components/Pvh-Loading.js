import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const PvhLoading = () =>
    <View style={styles.container}>
        <ActivityIndicator size='large' color="#0000ff" />
        <View style={styles.loading}></View>
    </View>

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.7,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default PvhLoading;