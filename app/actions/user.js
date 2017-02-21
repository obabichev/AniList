'use strict';

import {UPDATE_USER_ACITON} from '../constatns/user';
import {startDownloading, stopDownloading} from './router';
import {AlertIOS} from 'react-native';

import {fetchUser} from '../core/network/user';
import {refreshTokenAction} from './auth';


export const fetchUserData = () => {
    return dispatch => {
        return dispatch(asyncStartDownloading())
            .then(() => dispatch(refreshTokenAction()))
            .then(() => dispatch(fetchUserAction()))
            .then(() => dispatch(stopDownloading()));
    }
};

const asyncStartDownloading = () => {
    return dispatch => Promise.resolve().then(dispatch(startDownloading()));
};

const fetchUserAction = () => {
    return dispatch => fetchUser().then(
        user => dispatch(updateUserAction(user)),
        error => AlertIOS.alert('User info downloading failed', error.message)
    );
};

const updateUserAction = user => ({
    type: UPDATE_USER_ACITON,
    user: user
});