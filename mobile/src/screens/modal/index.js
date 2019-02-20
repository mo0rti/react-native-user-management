import React from "react";
import Layout from "./Layout";

class ModalScreen extends React.Component {

    _goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <Layout navigation={this.props.navigation} />
        );
    }
}

export default ModalScreen;
