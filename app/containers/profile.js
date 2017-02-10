'use strict';

import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {openAnimeListScreen} from '../actions/router';


class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log("Profile: render: user: " + JSON.stringify(this.props.user));
        return (
            <View style={styles.container}>
                <Text>Profile!</Text>
                <Text>{this.props.user.id}</Text>
                <Text>{this.props.user.login}</Text>

                <Button title="Anime list" onPress={this.props.openAnimeListScreen}/>
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
    user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        openAnimeListScreen: () => dispatch(openAnimeListScreen())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);