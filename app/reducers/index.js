'use strict';

import {combineReducers} from 'redux';

import auth from './auth';
import router from './router';
import anime from './anime';


const reducers = combineReducers({
    auth,
    router,
    anime,
});

export default reducers;