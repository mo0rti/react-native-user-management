import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PvhHeader, PvhToast } from '@Components';
import { deleteUser } from "@Actions/User-Account-Delete-Action";
import Layout from "./Layout";

class SettingScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return PvhHeader({
            navigation,
            title: 'Delete the user account'
        });
    }

    _deleteAccount = () => {
        let { user, onGoBack } = this.props.screenProps;
        this.props.deleteUser(user.id)
            .then(()=> {                
                PvhToast.showSuccess("Successfully deleted");
                this.props.navigation.popToTop();
            })
            .catch(error => PvhToast.showError(error.message || error));
    }

    render() {
        let { user } = this.props.screenProps;
        return (
            <Layout user={user} deleteAccount={this._deleteAccount} />
        );
    }
}

export default connect(null, { deleteUser })(SettingScreen);
