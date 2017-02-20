'use strict';

import React, {Component, Navigator} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Text, View, AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist'

import MainRouter from './MainRouter';
import reducer from '../reducers/index';
import {openLaunchScreen} from '../actions/router';

const persistingOptions = {
    storage: AsyncStorage,
    // whitelist: ['auth'],
    whitelist: []
};

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, persistingOptions, () => store.dispatch(openLaunchScreen()));

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainRouter/>
            </Provider>
        );
    }
}