'use strict';

import {combineReducers} from 'redux';

import auth from './auth';
import router from './router';
import user from './user';
import anime from './anime';


const reducers = combineReducers({
    auth,
    router,
    user,
    anime,
});

export default reducers;