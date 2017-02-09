'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import Launch from './launch';
import Profile from './profile';

class MainRouter extends Component {
    render() {
        console.log("Rerender mainRouter: " + this.props.route);
        switch (this.props.route) {
            case 'LAUNCH':
                return <Launch/>;
            case 'PROFILE':
                return <Profile/>;
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