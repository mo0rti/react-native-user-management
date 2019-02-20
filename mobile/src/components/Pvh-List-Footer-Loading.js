import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

const PvhListFooterLoading = () => <ActivityIndicator size="large" color="#0000ff" />

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

export default PvhListFooterLoading;