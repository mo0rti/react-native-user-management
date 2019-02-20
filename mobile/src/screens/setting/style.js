import EStyleSheet from "react-native-extended-stylesheet";

const screenStyle = EStyleSheet.create({
    inputDivider: {
        paddingTop: "15rem"
    },

    registerSection: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5rem",
        paddingBottom: "10rem"
    },
    deleteButton: {
        justifyContent: 'center',
        marginTop: "20rem",
        backgroundColor: '#ff2828'
    },
    warningTextTitle: {
        textAlign: 'center',
        fontWeight: "bold",
        color: 'red'
    },
    warningTextSubtitle: {
        marginTop: "10rem",
        textAlign: 'center'
    }
});

export default screenStyle;
