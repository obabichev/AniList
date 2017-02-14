'use strict';

import {Text, View, TextInput, Button, StyleSheet, Linking} from 'react-native';
import React, {Component, Navigator, PropTypes} from 'react';

import TokenStorage from '../core/preferences/token';

import {connect} from 'react-redux';

import {login} from '../actions/auth';
const config = require('../network/config');


function anilistOauth(app_key) {
    let url = [
        `https://anilist.co/api/auth/authorize`,
        `?grant_type=authorization_code`,
        `&response_type=code`,
        `&client_id=` + app_key,
        `&redirect_uri=oauth2example://foo`
    ].join(``);
    console.log(`login url: ${url}`);
    Linking.openURL(url);
    Linking.addEventListener(`url`, handleUrl);

}

function handleUrl(event) {
    console.log(`Success auth ${event.url}`);

    Linking.removeEventListener('url', handleUrl);
}


class Launch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: 'obabichev',
                password: ''
            }
        };
    }

    componentDidMount() {
        // anilistOauth(config.app_key);
        TokenStorage.isAuthorized().then(
            res => res ? '//todo' : anilistOauth(config.app_key)
        );
    }

    render() {
        return <View></View>;
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           value={this.state.user.login}
                           onChangeText={this.setLogin}
                />
                <TextInput secureTextEntry={true}
                           style={styles.input}
                           value={this.state.user.password}
                           onChangeText={this.setPassword}
                />
                <Button title="Login" onPress={this.loginOnClick}/>
            </View>
        );
    }

    setLogin = login => this.setState({
        user: {
            login: login,
            password: this.state.user.password
        }
    });

    setPassword = password => this.setState({
        user: {
            login: this.state.user.login,
            password: password,
        }
    });


    loginOnClick = () => {
        anilistOauth(config.app_key);
        // this.props.login(this.state.user);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 26,
        borderWidth: 1,
        borderColor: '#0f0f0f',
        margin: 20,
        fontSize: 13,
        padding: 4,
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
    };
};

export default connect(undefined, mapDispatchToProps)(Launch);