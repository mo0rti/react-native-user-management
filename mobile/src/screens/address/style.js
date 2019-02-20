import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const screenStyle = EStyleSheet.create({
    inputDivider: {
        paddingTop: "8rem"
    },
    form: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: hp('2%')
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    addressHeader: {
        fontWeight: "600",
        color: "#dee2e2"
    },
    listfooter: {
        paddingBottom: "15rem"
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
    },
    deleteButton: {
        position: 'absolute',
        right: wp('5%'),
        top: 2
    }
});

export default screenStyle;
