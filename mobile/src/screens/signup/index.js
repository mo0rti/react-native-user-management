import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '@Actions/User-Account-Signup-Action';
import { PvhToast } from '@Components';
import { checkUsernameAvaibility } from '@Actions/Username-Availability-Action';
import { isEmailValid, isPhoneValid, isPasswordStrong, isPasswordMedium } from '@Helpers/General-Helpers';
import Layout from "./Layout";

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            name: '',
            phone: '',
            gender: 'male',
            avatar: "",
            city: '',
            street: '',
            number: '',
            zipcode: '',
            isChecked: false
        };
    }

    _handleTextChange = (sender, inputValue) => {
        let newState = Object.assign({}, { ...this.state });
        newState[sender] = inputValue;
        this.setState(newState);
    }

    _isDataValid = ({ username, password, email, name, phone }) => {
        let numberOfErrors = 0;
        this.nameRef.setError((!name) ? 'Name is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        this.usernameRef.setError((!username) ? 'User name is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        this.passwordRef.setError((!password) ? 'Password is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        this.emailRef.setError((!email) ? 'Email is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        if (phone)
            this.phoneRef.setError(!isPhoneValid(phone) ? 'Phone is invalid' : '', errorState => errorState ? numberOfErrors++ : 0);
        if (email)
            this.emailRef.setError(!isEmailValid(email) ? 'Email is invalid' : '', errorState => errorState ? numberOfErrors++ : 0);
        if (password) {
            let passwordIsValid = isPasswordStrong(password) || isPasswordMedium(password);
            this.passwordRef.setError((!passwordIsValid) ? 'Password is invalid' : '', errorState => errorState ? numberOfErrors++ : 0);
        }

        return numberOfErrors == 0;
    }

    _isUsernameAvailable = () => {
        const { username } = this.state;

        return checkUsernameAvaibility(username)
            .then(() => {
                this.usernameRef.setError('');
                return Promise.resolve(true);
            })
            .catch(error => {
                this.usernameRef.setError(error.message || error);
                return Promise.reject(false);
            });
    }

    _goBack = () => this.props.navigation.goBack();
    _setUsernameRef = ref => this.usernameRef = ref;
    _setPasswordRef = ref => this.passwordRef = ref;
    _setEmailRef = ref => this.emailRef = ref;
    _setNameRef = ref => this.nameRef = ref;
    _setPhoneRef = ref => this.phoneRef = ref;
    _setCityRef = ref => this.cityRef = ref;
    _setStreetRef = ref => this.streetRef = ref;
    _setUnitNumberRef = ref => this.unitnumberRef = ref;
    _setZipcodeRef = ref => this.zipcodeRef = ref;

    _signup = () => {
        let { username, password, email, name, gender, phone, avatar, city, street, number, zipcode } = this.state;
        let user = { username, password, email, gender, name, avatar, phone, address: [{ city, street, number, zipcode }] };

        if (!this._isDataValid(this.state)) return;
        this._isUsernameAvailable()
            .then(isAvailable => {
                if (isAvailable) {
                    this.props
                        .signup(user)
                        .then(() => this.props.navigation.navigate('App'))
                        .catch(error => PvhToast.showError(error.message || error));
                }
            })
            .catch(() => {
            });
    };

    _onCheckBoxValueChange = (checked) => {
        this.setState({ isChecked: checked });
    }

    render() {
        const { isRequesting } = this.props;
        let { isChecked } = this.state;

        return (
            <Layout
                user={this.state}
                isRequesting={isRequesting}
                signup={this._signup}
                onChangeText={this._handleTextChange}
                goBack={this._goBack}
                setUsernameRef={this._setUsernameRef}
                setNameRef={this._setNameRef}
                setPhoneRef={this._setPhoneRef}
                setPasswordRef={this._setPasswordRef}
                setEmailRef={this._setEmailRef}
                setCityRef={this._setCityRef}
                setStreetRef={this._setStreetRef}
                setUnitNumberRef={this._setUnitNumberRef}
                setZipcodeRef={this._setZipcodeRef}
                onCheckBoxValueChange={this._onCheckBoxValueChange}
                isChecked={isChecked}
            />
        );
    }
}

SignUpScreen.navigationOptions = () => ({
    header: null,
});

const mapStateToProps = ({ account }) => ({
    isRequesting: account.isRequesting
})

export default connect(mapStateToProps, { signup })(SignUpScreen);
