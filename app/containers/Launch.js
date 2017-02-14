'use strict';

import {Text, View, TextInput, Button, StyleSheet, Linking} from 'react-native';
import React, {Component, Navigator, PropTypes} from 'react';

import TokenStorage from '../core/preferences/token';

import {connect} from 'react-redux';

import {authorize} from '../core/network/auth';


class Launch extends Component {

    constructor(props) {
        super(props);
    }

    login = async() => {
        if (!await TokenStorage.isAuthorized()) {
            let code = await authorize();
            console.log("CODE: " + code);
        }
    };

    componentDidMount() {
        this.login().then();
    }

    render() {
        return <View/>;
    }
}

export default connect()(Launch);