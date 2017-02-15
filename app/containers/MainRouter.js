'use strict';

import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist'

import {SPLASH_SCREEN, LAUNCH_SCREEN, PROFILE_SCREEN, ANIME_LIST_SCREEN} from '../constatns/screens';
import SplashScreen from './SplashScreen';
import Launch from './Launch';
import Profile from './Profile';
import AnimeList from './AnimeList';


class MainRouter extends Component {

    render() {
        switch (this.props.route) {
            case SPLASH_SCREEN:
                return <SplashScreen/>;
            case LAUNCH_SCREEN:
                return <Launch/>;
            case PROFILE_SCREEN:
                return <Profile/>;
            case ANIME_LIST_SCREEN:
                return <AnimeList/>;
            default:
                return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        route: state.router.route
    }
};

export default connect(mapStateToProps)(MainRouter);