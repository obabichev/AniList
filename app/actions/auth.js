'use strict';

import {openProfileScreen, startDownloading, stopDownloading} from './router';
import {authorize, accessToken, refreshToken} from '../core/network/auth';
import {AUTH} from '../constatns/auth';
import {isAccessTokenAlive} from '../core/store';

export const auth = (tokens) => ({
    type: AUTH,
    tokens: tokens
});

export const login = accessToken => {
    return dispatch => {
        if (!accessToken) {
            dispatch(startDownloading());
            getTokens().then(
                tokens => {
                    dispatch(stopDownloading());
                    dispatch(auth(tokens));
                    dispatch(openProfileScreen());
                },
                () => dispatch(stopDownloading())
            );
        } else {
            dispatch(openProfileScreen());
        }
    };
};

export const refreshTokenAction = () => {
    if (isAccessTokenAlive()) {
        // return new Promise((resolve, reject) => resolve());
        // return Promise.resolve();
        return dispatch => {
        };
    }
    return dispatch =>
        refreshToken().then(
            tokens => {
                dispatch(auth(tokens))
            },
            () => console.log("Token refresh failed")
        );
};

async function getTokens() {
    let code = await authorize();
    let tokens = await accessToken(code);
    return tokens;
}