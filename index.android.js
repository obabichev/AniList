'use strict';

import {
    AppRegistry,
    DrawerLayoutAndroid
} from 'react-native';

import React, {Component} from 'react';

import App from './app/containers/App';

class AndroidApp extends Component{

    render(){
        return (
            <DrawerLayoutAndroid>
                <App/>
            </DrawerLayoutAndroid>
        )
    }

}

AppRegistry.registerComponent('MyAnimeList', () => App);
