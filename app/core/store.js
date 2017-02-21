'use strict';

import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducers/index';
import {persistStore, autoRehydrate} from 'redux-persist'
import thunk from 'redux-thunk';

import {openLaunchScreen} from '../actions/router';

const persistingOptions = {
    storage: AsyncStorage,
    whitelist: ['auth'],
    // whitelist: []
};

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);

persistStore(store, persistingOptions, () => store.dispatch(openLaunchScreen()));

