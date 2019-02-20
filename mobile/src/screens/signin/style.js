import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
    pageTitleSection: {
        width: '100%',
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    pageTitleText: {
    },
    inputDivider: {
        paddingTop: "8rem"
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginButton: {
        marginTop: "40rem"
    },
    spacer: {
        height: hp('10%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "10rem"
    },
    line: {
        position: 'absolute',
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        paddingRight: "10rem"
    },
    spacerLabelContainer: {
        backgroundColor: 'white',
        paddingLeft: "10rem",
        paddingRight: "10rem"
    },
    register: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0
    },
    labelDontHaveAccount: {
        fontSize: "13rem",
        color: '#313131'
    },
    registerButton: {
        marginTop: "10rem"
    },
    footer: {
        alignItems: 'center',
        paddingTop: "30rem"
    },
    forgetPasswordText: {
        color: "#00A0C6",
        fontSize: "13rem"
    },
    signupcaption: {
        color: "#00A0C6"
    }    
});

export default styles;