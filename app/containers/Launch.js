'use strict';

import {Text, View, TextInput, Button, StyleSheet, Linking} from 'react-native';
import React, {Component, Navigator, PropTypes} from 'react';

import {connect} from 'react-redux';

import {authorize, accessToken} from '../core/network/auth';

import {auth} from '../actions/auth';
import {openProfileScreen} from '../actions/router';


class Launch extends Component {

    constructor(props) {
        super(props);
    }

    login = async() => {
        console.log(`try login: ${JSON.stringify(this.props.tokens)}`);
        if (!this.props.tokens.access_token) {
            let code = await authorize();
            console.log("CODE: " + code);
            let tokens = await accessToken(code);
            console.log(`TOKENS: ${JSON.stringify(tokens)}`);

            this.props.auth({
                code: code,
                access_token: tokens.access_token,
                refresh_token: tokens.refresh_token
            });
        }
        this.props.openProfileScreen();
    };

    componentDidMount() {
        this.login().then();
    }

    render() {
        return <View/>;
    }
}

const mapStateToProps = state => ({
    tokens: state.auth.tokens
});
const mapDispatchToProps = dispatch => {
    return {
        auth: tokens => dispatch(auth(tokens)),
        openProfileScreen: () => dispatch(openProfileScreen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launch);