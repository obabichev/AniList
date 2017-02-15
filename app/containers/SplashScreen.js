'use strict';

import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

class SplashScreen extends Component {
    render() {
        return (
            <View/>
        );
    }
}

export default connect()(SplashScreen);
