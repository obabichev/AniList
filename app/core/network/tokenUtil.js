'use strict';

import {store} from '../store';

export const isAccessTokenAlive = () => {
    let accessTokenExpiresTime = store.getState().auth.tokens.expires;
    let currentTime = new Date().getTime() / 1000;
    let diff = accessTokenExpiresTime - currentTime;
    return !(diff < 1000);
};

export const getAccessToken = () => {
    return store.getState().auth.tokens.access_token;
};

export const getRefreshToken = () => {
    return store.getState().auth.tokens.refresh_token;
};
