'use strict';

import {get} from './rest/rest';
import {genUrl} from './urlUtil';
import {getAccessToken} from './tokenUtil';

const fetchUserInfoParams = accessToken => ({
    access_token: accessToken,
    grant_type: 'authorization_code'
});

export async function fetchUser() {
    let accessToken = getAccessToken();
    let result = await get(genUrl('/user', fetchUserInfoParams(accessToken)));
    return result;
}


