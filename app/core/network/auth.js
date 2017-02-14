'use strict';

import {Linking} from 'react-native';
import {client} from '../settings/settings';

function authorizeViaWebForm(url, callback) {
    let handler = event => {
        Linking.removeEventListener('url', handler);
        callback(event);
    };
    Linking.openURL(url);
    Linking.addEventListener(`url`, handler);
}

const DOMEN = 'https://anilist.co/api';

const authParams = [
    'grant_type=authorization_code',
    'response_type=code',
    `client_id=${client.clientId}`,
    `redirect_uri=${client.redirectUri}`
];

const createAuthUrl = () => `${DOMEN}/auth/authorize?${authParams.join('&')}`;
const codeFromRedirectPath = path => path.replace(`${client.redirectUri}?code=`, '');

export async function authorize() {
    return new Promise((resolve, reject) => {
        let authUrl = createAuthUrl();
        console.log(`AUTH URL: ${authUrl}`);

        authorizeViaWebForm(authUrl, event => resolve(codeFromRedirectPath(event.url)));
    });
}

export async function accessToken(code) {

}

