import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationService from '@Navigations/Navigation-Service';
import { update } from "@Actions/User-Account-Address-Update-Action";
import { PvhHeader, PvhHeaderButton } from '@Components';
import { guid } from '@Helpers/General-Helpers';
import Layout from "./Layout";

class AddressScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return PvhHeader({
            navigation,
            title: 'User Address',
            right: <PvhHeaderButton caption="Save" onPress={params.edit} />
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            data: []
        };
    }

    async componentDidMount() {
        this.props.navigation.setParams({ edit: this._edit });
        let { user } = this.props.screenProps;
        await this.setState({ data: user.address || [], id: user.id })
    }

    _handleTextChange = (sender, inputValue, index) => {
        let newState = Object.assign({}, { ...this.state });
        newState.data[index][sender] = inputValue;
        this.setState(newState);
    }

    _addNewAddress = () => {
        let { data } = this.state;
        data = [...data, { id: guid(), number: 0 }];
        this.setState({ data });
    }

    _deleteAddress = (item) => {
        let { data } = this.state;
        data = data.filter(t => t.id != item.id);
        this.setState({ data });
    }

    _edit = () => {
        let { id, data } = this.state;
        this.props.update({ id, data })
            .then((result) => PvhToast.showSuccess(result))
            .catch(error => PvhToast.showError(error.message || error));
    };

    render() {
        let { data } = this.state;
        return (
            <Layout
                onChangeText={this._handleTextChange}
                addNewAddress={this._addNewAddress}
                deleteAddress={this._deleteAddress}
                data={data} />
        );
    }
}

export default connect(null, { update })(AddressScreen);
