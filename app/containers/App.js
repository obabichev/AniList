'use strict';

import React, {Component, Navigator} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import MainRouter from './MainRouter';
import reducer from '../reducers/index';


const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <MainRouter/>
            </Provider>
        );
    }
}