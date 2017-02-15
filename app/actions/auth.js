'use strict';

import {openProfileScreen} from './router';
import {authorize, accessToken} from '../core/network/auth';
import {AUTH} from '../constatns/auth';

export const auth = (tokens) => ({
    type: AUTH,
    tokens: tokens
});

export const login = accessToken => {
    return dispatch => {
        if (!accessToken) {
            getTokens().then(
                tokens => {
                    dispatch(auth(tokens));
                    dispatch(openProfileScreen())
                }
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