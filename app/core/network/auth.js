'use strict';

import {Linking} from 'react-native';
import {client} from '../settings/settings';
import {post} from './rest/rest';

import {genUrl} from './urlUtil';
import {getRefreshToken} from './tokenUtil';

function authorizeViaWebForm(url, callback) {
    let handler = event => {
        Linking.removeEventListener('url', handler);
        callback(event);
    };
    Linking.openURL(url);
    Linking.addEventListener(`url`, handler);
}

const authParams = () => ({
    grant_type: 'authorization_code',
    response_type: 'code',
    client_id: client.clientId,
    redirect_uri: client.redirectUri
});

const createAuthUrl = () => genUrl('/auth/authorize', authParams());
const codeFromRedirectPath = path => path.replace(`${client.redirectUri}?code=`, '');

export async function authorize() {
    return new Promise((resolve, reject) => {
        let authUrl = createAuthUrl();

        authorizeViaWebForm(authUrl, event => resolve(codeFromRedirectPath(event.url)));
    });
}

const accessTokenParams = code => ({
    grant_type: 'authorization_code',
    client_id: client.clientId,
    client_secret: client.clientSecret,
    redirect_uri: client.redirectUri,
    code: code
});
const createAccessTokenUrl = code => genUrl('/auth/access_token', accessTokenParams(code));
export async function accessToken(code) {
    let accessTokenUrl = createAccessTokenUrl(code);

    let result = await post(accessTokenUrl, null);
    return result;
}


const refreshTokensParams = refreshToken => ({
    grant_type: 'refresh_token',
    client_id: client.clientId,
    client_secret: client.clientSecret,
    refresh_token: refreshToken
});
const createRefreshTokenUrl = refreshToken => genUrl('/auth/access_token', refreshTokensParams(refreshToken));
export async function refreshToken() {
    let refreshToken = getRefreshToken();
    let refreshTokenUrl = createRefreshTokenUrl(refreshToken);

    let result = await post(refreshTokenUrl, null);
    result.refresh_token = refreshToken;
    return result;
}
