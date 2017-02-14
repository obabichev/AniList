'use strict';

import React, {Component, Navigator} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Text, View, AsyncStorage} from 'react-native';
import {persistStore, autoRehydrate} from 'redux-persist'

import MainRouter from './MainRouter';
import reducer from '../reducers/index';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        autoRehydrate()
    )
);


export default class App extends Component {

    constructor(props) {
        super(props);

        // TokenStorage.getTokens().then(
        //     tokens => console.log(`Tokens on start app: ${JSON.stringify(tokens)}`)
        // );

        persistStore(store,
            {
                storage: AsyncStorage,
                whitelist: ['auth']
            },
            () => {
                console.log("Restoring ended");
                this.showRouter();
            }
        );

        this.state = {
            routing: false
        };
    }

    showRouter = () => this.setState({routing: true});

    drawContent = () => this.state.routing ? <MainRouter/> : <View/>;

    render() {
        return (
            <Provider store={store}>
                {/*<MainRouter/>*/}
                {this.drawContent()}
            </Provider>
        );
    }
}