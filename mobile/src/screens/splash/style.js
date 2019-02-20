import { StyleSheet } from "react-native";

const screenStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        flex: 1,
        opacity: 0.6
    },
    animation: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        backgroundColor: 'transparent',
    }
});

export default screenStyle;