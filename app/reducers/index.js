'use strict';

import {combineReducers} from 'redux';

import auth from './auth';
import router from './router';


const reducers = combineReducers({
    auth,
    router
});

export default reducers;