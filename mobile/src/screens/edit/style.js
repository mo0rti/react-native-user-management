import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        paddingBottom: "10rem"
    },
    deleteButton: {
        justifyContent: 'center',
        marginTop: "20rem",
        backgroundColor: '#ff2828'
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: "15rem"
    },
    radio: {
        width: '100%',
        paddingTop: "15rem"
    },
    radioLabels: {
        //paddingLeft: wp('6%'),
    }
});

export default screenStyle;
