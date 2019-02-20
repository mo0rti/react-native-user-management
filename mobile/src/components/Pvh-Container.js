import React from 'react';
import { View, Platform, StatusBar, StyleSheet } from 'react-native';

const PvhContainer = ({ noStatusbarPadding, children, style }) =>
    <View style={[
            styles.container, 
            { paddingTop: (noStatusbarPadding) ? 0 : (Platform.OS === 'ios' ? 0 : StatusBar.currentHeight) }, 
            { ...style }
        ]}>
        {children}
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
});

export default PvhContainer;