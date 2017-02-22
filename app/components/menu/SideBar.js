'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {connect} from 'react-redux';

import color from '../../core/settings/color';
import ProfileHeaderView from '../profile/ProfileHeaderView';

import {closeNavBar, openAnimeListScreen, openProfileScreen} from '../../actions/router';

class SideBar extends Component {

    delimeter = () => <View style={styles.delimeter}/>;

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.openProfileScreen}>
                    <View>
                        <ProfileHeaderView style={styles.header}/>
                    </View>
                </TouchableHighlight>
                {this.delimeter()}
                <Button
                    onPress={this.props.openAnimeListScreen}
                    title="Anime list"
                    color="white"
                />
                {this.delimeter()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.PRIMARY_COLOR_DARK
    },
    delimeter: {
        height: 1,
        backgroundColor: 'white'
    }
});

const mapDispatchToProps = dispatch => ({
    closeNavBar: () => dispatch(closeNavBar()),
    openAnimeListScreen: () => {
        dispatch(closeNavBar());
        dispatch(openAnimeListScreen())
    },
    openProfileScreen: () => {
        dispatch(closeNavBar());
        dispatch(openProfileScreen());
    }
});

export default connect(undefined, mapDispatchToProps)(SideBar);
