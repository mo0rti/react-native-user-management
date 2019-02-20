import React from "react";
import { View, Text, StyleSheet, Dimensions, Platform, TouchableWithoutFeedback } from "react-native";

const dimensions = Dimensions.get('window');
const windowWidth = dimensions.width;
const windowHeight = dimensions.height;

const Layout = (props) => {
    const {
        isVisible,
        containerStyle,
        overlayStyle,
        windowBackgroundColor,
        overlayBackgroundColor,
        onBackdropPress,
        borderRadius,
        width,
        height,
        fullScreen,
        ...rest
    } = props;
    if (!isVisible) return null;
    return (
        <TouchableWithoutFeedback onPress={onBackdropPress}>
            <View
                style={[
                    styles.container,
                    { backgroundColor: windowBackgroundColor },
                    containerStyle,
                ]}
                {...rest}
            >
                <TouchableWithoutFeedback>
                    <View
                        style={[
                            styles.overlay,
                            {
                                borderRadius,
                                backgroundColor: overlayBackgroundColor,
                                width,
                                height,
                            },
                            fullScreen && { width: windowWidth, height: windowHeight },
                            overlayStyle,
                        ]}
                    >
                        <Text>Hello from Overlay!</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    overlay: {
        borderRadius: 5,
        padding: 10,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 4,
            },
            android: {
                elevation: 2,
            },
        }),
    },
});

export default Layout;