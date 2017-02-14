'use strict';

import {Linking} from 'react-native';
import {client} from '../settings/settings';
import {get, post} from './rest/rest';

const DOMEN = 'https://anilist.co/api';

function authorizeViaWebForm(url, callback) {
    let handler = event => {
        Linking.removeEventListener('url', handler);
        callback(event);
    };
    Linking.openURL(url);
    Linking.addEventListener(`url`, handler);
}

const authParams = () => [
    'grant_type=authorization_code',
    'response_type=code',
    `client_id=${client.clientId}`,
    `redirect_uri=${client.redirectUri}`
];

const createAuthUrl = () => `${DOMEN}/auth/authorize?${authParams().join('&')}`;
const codeFromRedirectPath = path => path.replace(`${client.redirectUri}?code=`, '');

export async function authorize() {
    return new Promise((resolve, reject) => {
        let authUrl = createAuthUrl();

        authorizeViaWebForm(authUrl, event => resolve(codeFromRedirectPath(event.url)));
    });
}

const accessTokenParams = code => [
    'grant_type=authorization_code',
    `client_id=${client.clientId}`,
    `client_secret=${client.clientSecret}`,
    `redirect_uri=${client.redirectUri}`,
    `code=${code}`
];

const createAccessTokenUrl = code => `${DOMEN}/auth/access_token?${accessTokenParams(code).join('&')}`;

export async function accessToken(code) {
    let accessTokenUrl = createAccessTokenUrl(code);

    let result = await post(accessTokenUrl, null);
    return result;
}

