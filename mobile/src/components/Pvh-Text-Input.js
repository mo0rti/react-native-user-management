import React from 'react';
import { View, TextInput, Image, Keyboard } from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Settings from '@Constants/Settings';
import { TextInputNormalState, TextInputValidState, TextInputErrorState} from "@Assets/icons";
import PvhText from "./Pvh-Text";

const SELECTED = "#00A0C6";
const UNSELECTED = "#000000";

class PvhTextInput extends React.Component {

    state = {
        isFocused: false,
        status: 'NONE',
        error: ''
    }

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    // errorCallback: returns the state to caller component
    setError = (error, errorCallback) => {
        let isThereAnyError = (error) ? true : false;
        this.setState({ status: isThereAnyError ? 'ERROR' : 'CLEAR', error });
        if (errorCallback)
            errorCallback(isThereAnyError);
    }

    hasError = () => this.state.status == 'ERROR';

    handleFocus = event => {
        this.setState({ isFocused: true });
        if (this.props.onFocus) {
            this.props.onFocus(event);
        }
    }

    handleBlur = event => {
        this.setState({ isFocused: false });
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    focusOnClick = () => {
        this.input.focus();
    }

    render() {
        let { isFocused, error, status } = this.state;
        const { onFocus, onBlur, label, style, inputStyle, textInputStyle, icon, isReadonly, ...otherProps } = this.props;

        return (
            <View style={style}>
                <View
                    style={[
                        styles.container,
                        {
                            borderBottomWidth: 1,
                            borderBottomColor: isFocused ? SELECTED : UNSELECTED
                        }
                    ]}>
                    <PvhText style={styles.label} >
                        {label}
                    </PvhText>
                    <View style={[styles.inputContainer, inputStyle]}>
                        {
                            (icon) ?
                                <View style={styles.icon}>
                                    <Image resizeMode="center" source={icon} />
                                </View>
                                : null
                        }
                        <TextInput
                            ref={ref => this.input = ref}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            editable={!isReadonly}
                            onSubmitEditing={Keyboard.dismiss}
                            underlineColorAndroid="transparent"
                            style={[styles.input, textInputStyle, isReadonly ? styles.readOnly : null]}
                            {...otherProps}
                        />
                        <View style={styles.sign}>
                            {status == 'ERROR' ? <TextInputErrorState /> : status == 'CLEAR' ? <TextInputValidState /> : <TextInputNormalState />}
                        </View>
                    </View>
                </View>
                <PvhText xsmall style={styles.error} >
                    {this.hasError() ? error : " "}
                </PvhText>
            </View>
        )
    }
}

var styles = EStyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'flex-start'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0
    },
    input: {
        flex: 1,
        height: hp('4.1%'),
        fontFamily: Settings.FONT_FAMILY,
        fontSize: "11rem"
    },
    readOnly: {
        color: '#BCBCBC'
    },
    sign: {
    },
    icon: {
        paddingRight: wp('2%')
    },
    label: {
        color: '#BCBCBC'
    },
    error: {
        color: '#FF0000'
    }
});

export default PvhTextInput;
