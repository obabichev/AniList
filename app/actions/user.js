'use strict';

import {UPDATE_USER_ACITON} from '../constatns/user';
import {startDownloading, stopDownloading} from './router';
import {AlertIOS} from 'react-native';

import {fetchUser} from '../core/network/user';

const updateUserAction = user => ({
    type: UPDATE_USER_ACITON,
    user: user
});

export const fetchUserData = accessToken => {
    return dispatch => {
        dispatch(startDownloading());
        fetchUser(accessToken).then(
            successFetch(dispatch),
            failedFetch(dispatch)
        );
    }
};

const successFetch = dispatch => user => {
    dispatch(stopDownloading());
    dispatch(updateUserAction(user));
};

const failedFetch = (dispatch) => error => {
    dispatch(stopDownloading());
    AlertIOS.alert('User info downloading failed', error.message);
};