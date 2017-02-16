'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';

import {openAnimeListScreen} from '../actions/router';
import {fetchUserData} from '../actions/user';


class Profile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.user.id){
            this.props.fetchUserData(this.props.token);
        }
    }

    renderProfile = () => {
        if (this.props.user.id) {
            return this.showProfile();
        }
    };

    showProfile = () => (
        <Text>ID:{this.props.user.id}</Text>
    );

    render() {
        return (
            <View style={styles.container}>
                {this.renderProfile()}
                <Text>Profile!</Text>
                <Text>{this.props.token}</Text>

                <Button title="Anime list!" onPress={this.props.openAnimeListScreen}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => ({
    token: state.auth.tokens.access_token,
    user: state.user.user
});

const mapDispatchToProps = (dispatch) => {
    return {
        openAnimeListScreen: () => dispatch(openAnimeListScreen()),
        fetchUserData: token => dispatch(fetchUserData(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);