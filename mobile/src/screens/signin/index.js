import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signin } from '@Actions/User-Account-SignIn-Action';
import { PvhToast, PvhLoading } from '@Components';
import Layout from "./Layout";

class SignInScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: {},
        };
    }

    _handleTextChange = (sender, inputValue) => {
        let newState = Object.assign({}, { ...this.state });
        newState[sender] = inputValue;
        this.setState(newState);
    }

    _setUsernameRef = ref => this.usernameRef = ref;
    _setPasswordRef = ref => this.passwordRef = ref;

    _isDataValid = ({ username, password }) => {
        let numberOfErrors = 0;

        this.usernameRef.setError((!username) ? 'User name is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        this.passwordRef.setError((!password) ? 'Password is required' : '', errorState => errorState ? numberOfErrors++ : 0);
        return numberOfErrors == 0;
    }

    _signin = () => {
        let { username, password } = this.state;
        let { navigation, signin } = this.props;
        if (!this._isDataValid(this.state)) return;

        signin({ username, password })
            .then(() => navigation.navigate('App'))
            .catch(error => PvhToast.showError(error.message || error));
    };

    _signup = () => this.props.navigation.navigate('Signup');

    render() {
        const { isRequesting } = this.props;
        return (
            <Layout
                isRequesting={isRequesting}
                signin={this._signin}
                signup={this._signup}
                setUsernameRef={this._setUsernameRef}
                setPasswordRef={this._setPasswordRef}
                onChangeText={this._handleTextChange} />
        );
    }
}

SignInScreen.navigationOptions = () => ({
    header: null,
});

const mapStateToProps = ({ account }) => ({
    isRequesting: account.isRequesting
})

export default connect(mapStateToProps, { signin })(SignInScreen);
