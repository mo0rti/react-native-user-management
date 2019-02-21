import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PvhHeader, PvhToast } from '@Components';
import { signout } from "@Actions/User-Account-Signout-Action";
import Layout from "./Layout";

class AccountScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return PvhHeader({
            navigation,
            title: `Sign out account`
        });
    }
    
    _signOutAccount = () => {        
        this.props.signout()
            .then(() => {                
                this.props.navigation.navigate("Auth");
            })
            .catch(error => PvhToast.showError(error.message || error));
    }

    render() {
        let { user } = this.props;
        return (
            <Layout user={user} signOutAccount={this._signOutAccount} />
        );
    }
}
const MapStateToProps = ({ account }) => (
    {
        user: account.user
    }
)

export default connect(MapStateToProps, { signout })(AccountScreen);
