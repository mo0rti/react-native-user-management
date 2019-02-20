import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import EStyleSheet from "react-native-extended-stylesheet";
import { Settings } from '@Constants';
import { SignupTick } from "@Assets/icons";
import PvhText from './Pvh-Text';

class PvhCheckBox extends React.Component {

    state = {
        checked: false,
        ref: React.createRef()
    }

    _onValueChange = () => {
        this.setState({ checked: !this.state.checked }, () => {
            if (this.props.onValueChange) {
                this.props.onValueChange(this.state.checked);
            }
        });
    }

    isChecked = () => this.state.checked;

    render() {
        let { style, caption, children, textStyle } = this.props;
        let { checked } = this.state;

        return (
            <View style={[styles.container, style]}>
                <TouchableOpacity
                    style={[styles.checkbox,
                    checked ? styles.selected : styles.unSelected
                    ]}
                    onPress={this._onValueChange}>
                    {
                        checked ? <SignupTick /> : null
                    }
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={this._onValueChange}>
                    <PvhText style={[styles.caption, textStyle]}>{children ? children : caption}</PvhText>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    caption: {
        fontFamily: Settings.FONT_FAMILY,
        fontSize: "13rem",
        color: '#00A0C6',
        marginStart: "10rem",
        textAlign: 'center'
    },
    checkbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('5%'),
        height: wp('5%'),
        borderRadius: wp('1%'),
        borderWidth: wp('0.5%')
    },
    selected: {
        backgroundColor: 'white',
        borderColor: '#00A0C6'
    },
    unSelected: {
        backgroundColor: 'white',
        borderColor: '#D0D0D0'
    },
    disable: {
    }
});

export default PvhCheckBox;
