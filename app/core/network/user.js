'use strict';

import {get} from './rest/rest';
import {genUrl} from './urlUtil';

// const fetchUserInfoParams = accessToken => ({
//     access_token: accessToken
// });

const fetchUserInfoParams = (accessToken) => [
    `access_token=${accessToken}`,
    'grant_type=authorization_code',
];

export async function fetchUser(accessToken) {
    let result = await get(genUrl('/user', fetchUserInfoParams(accessToken)));
    console.log(result);
    return result;
}

export async function accessToken(code) {
    let accessTokenUrl = createAccessTokenUrl(code);

    let result = await post(accessTokenUrl, null);
    return result;
}

