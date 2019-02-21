import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PvhToast, PvhNavbarTitle } from '@Components';
import { users } from '@Actions/Users-Action';
import { getUserInfo } from "@Actions/User-Information-Action";
import NavigationService from "@Navigations/Navigation-Service";
import { Settings } from "@Constants";
import Layout from "./Layout";

class HomeScreen extends Component {

    static navigationOptions = () => {
        return {
            headerLeft: null,
            headerTitle: <PvhNavbarTitle caption='Users accounts' />,
            headerRight: null
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            criteria: '',
            page: 1,
            items: [],
            isLoading: false,
            refreshing: false,
            noMoreRecords: false
        };
    }

    componentDidMount() {
        this._load();
    }

    componentWillUnmount() {
    }

    _onItemSelected = (user) => {
        this.props.getUserInfo({ id: user.id })
            .then(returnedUser => {
                NavigationService.navigate("Edit", { user: returnedUser, onGoBack: () => this._listRefresh() });
            })
            .catch(error => PvhToast.showError(error.message || error));

    }

    _listRefresh = () => this.setState({ refreshing: true, page: 1, items: [] }, () => this._load());
    _listLoadMore = () => {
        if (this.state.noMoreRecords) return;
        this.setState({ page: this.state.page + 1 }, () => this._load());
    }

    _load = async () => {
        let { userid, token } = this.props;
        let { page } = this.state;
        let pagesize = Settings.API_PAGE_SIZE;

        this.setState({ isLoading: true }, () => {
            users({ userid, page, pagesize, token })
                .then(result => {
                    this.setState({
                        noMoreRecords: result.length < pagesize,
                        items: [...this.state.items, ...result],
                        isLoading: false,
                        refreshing: false,
                    });
                }).catch(error => this.setState({ isLoading: false }, () => PvhToast.showError(error.message || error)));
        });
    }

    _renderFooter = (FooterComponent) => {
        if (!this.state.isLoading) return null;

        return <FooterComponent />
    }

    render() {
        const { isLoading, refreshing, items } = this.state;

        const listProps = {
            items,
            refreshing,
            isLoading,
            handleRefresh: this._listRefresh,
            handleLoadMore: this._listLoadMore,
            onItemSelected: this._onItemSelected,
            renderFooter: this._renderFooter
        }

        return (
            <Layout listProps={listProps} />
        );
    }
}

const mapStateToProps = ({ account }) => ({
    userid: account.user.id,
    token: account.user.token
});

export default connect(mapStateToProps, { getUserInfo })(HomeScreen);
