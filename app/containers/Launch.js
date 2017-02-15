'use strict';

import {Text, View, TextInput, Button, StyleSheet, Linking} from 'react-native';
import React, {Component, Navigator, PropTypes} from 'react';

import {connect} from 'react-redux';
import {login} from '../actions/auth'


class Launch extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.login(this.props.accessToken);
    }

    render() {
        return <View/>;
    }
}

const mapStateToProps = state => ({
    accessToken: state.auth.tokens.access_token
});
const mapDispatchToProps = dispatch => {
    return {
        login: accessToken => dispatch(login(accessToken))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Launch);