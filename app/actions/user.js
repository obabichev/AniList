'use strict';

import {UPDATE_USER_ACITON} from '../constatns/user';
import {startDownloading, stopDownloading} from './router';

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
    dispatch(updateUserAction(user));
    dispatch(stopDownloading());
};

const failedFetch = (dispatch) => () => {
    dispatch(stopDownloading());
    console.log("Fetch failed");
};