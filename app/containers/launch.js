'use strict';

import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import React, {Component, Navigator, PropTypes} from 'react';

import {connect} from 'react-redux';

import {openProfileScreen} from '../actions/router';

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

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                           value={this.state.user.login}
                           onChangeText={this.setLogin}
                />
                <TextInput style={styles.input}
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
        this.props.openProfileScreen();
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
        openProfileScreen: () => {
            dispatch(openProfileScreen())
        }
    }
};

export default connect(undefined, mapDispatchToProps)(Launch);