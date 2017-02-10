'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Launch from './Launch';
import Profile from './Profile';
import AnimeList from './AnimeList';

class MainRouter extends Component {
    render() {
        switch (this.props.route) {
            case 'LAUNCH':
                return <Launch/>;
            case 'PROFILE':
                return <Profile/>;
            case 'ANIME_LIST':
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