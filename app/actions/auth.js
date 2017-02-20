'use strict';

import {openProfileScreen, startDownloading, stopDownloading} from './router';
import {authorize, accessToken} from '../core/network/auth';
import {AUTH} from '../constatns/auth';

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

async function getTokens() {
    let code = await authorize();
    let tokens = await accessToken(code);
    return {
        code: code,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token
    }
}