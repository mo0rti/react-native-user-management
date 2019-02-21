import React, { Component } from 'react';
import { Font } from 'expo';
import { connect } from 'react-redux';
import { memoize } from "@Helpers/Async-Helpers";
import curveLinesAnimation from "@Assets/animations/curves-lines.json";
import Layout from "./Layout";

class SplashScreen extends Component {

    state = {
        animation: null,
    };

    componentWillMount() {
        this._playAnimation();
    }

    componentDidMount() {
        this._initialize();
    }

    _initialize = async () => {
        let { token } = this.props;
        let preparefonts = memoize(async () => this._loadFontsAsync());

        let letTheTimePass = memoize(async () => this._waitToShowSplashScreen());

        await Promise.all([preparefonts(), letTheTimePass()]);

        this.props.navigation.navigate(token ? 'App' : 'Auth');
        // this.props.navigation.navigate('Auth');
    }

    _loadFontsAsync = async () => {
        return Font.loadAsync({
            'Roboto_medium': require('@Assets/fonts/SpaceMono-Regular.ttf'),
            'helvetica-neue': require('@Assets/fonts/SpaceMono-Regular.ttf')
        });
    };

    _waitToShowSplashScreen = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        });
    }

    _setAnimationRef = animation => this.animation = animation;

    _playAnimation = () => {
        if (!this.state.animation) {
            this._loadAnimationAsync();
        } else {
            this.animation.reset();
            this.animation.play();
        }
    };

    _loadAnimationAsync = () => {
        this.setState({ animation: curveLinesAnimation }, this._playAnimation);
    };

    render() {
        let { animation } = this.state;
        return (
            <Layout animation={animation} setAnimationRef={this._setAnimationRef} />
        );
    }
}


SplashScreen.navigationOptions = () => ({
    header: null,
});

const mapStateToProps = ({ account }) => ({
    token: account.user.token
});

export default connect(mapStateToProps, {})(SplashScreen);
