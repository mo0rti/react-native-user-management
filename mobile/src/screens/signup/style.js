import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '@Constants/Colors';

const screenStyle = EStyleSheet.create({
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
    registerSection: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5rem",
        paddingBottom: "20rem"
    },
    signupButton: {
        justifyContent: 'center',
        marginTop: "20rem",
        backgroundColor: '#00A0C6'
    },
    signupButtonDisabled: {
        justifyContent: 'center',
        marginTop: "20rem",
        backgroundColor: 'rgba(0, 160, 198, 0.27)',
        elevation: 0,
        shadowColor: undefined,
        shadowOffset: undefined,
        shadowOpacity: undefined,
        shadowRadius: undefined
    },
    backButton: {
        justifyContent: 'center',
        marginTop: "20rem",
        backgroundColor: '#B5B5B5'
    },
    policyText: {
        fontSize: "13rem"
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: "15rem"
    },
    termsAndPolicyText: {
        paddingStart: "2rem",
        color: Colors.primary,
        fontSize: "13rem",
        fontWeight: 'bold'
    },
    checkbox: {
        paddingTop: "15rem",
        marginLeft: "5rem",
    },
    radio: {
        width: '100%',
        paddingTop: "15rem"
    },
    radioLabels: {
        //paddingLeft: wp('6%'),
    },
    inlineContainer: {
        flexDirection: 'row', 
        width: '100%'
    },
    inlineInput: {
        flex: 1,
        paddingTop: "8rem"
    },
    betweenInlineInputs: {
        width: wp('10%')
    }
});

export default screenStyle;
