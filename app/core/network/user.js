'use strict';

import {get} from './rest/rest';
import {genUrl} from './urlUtil';
import {store} from '../store';

const fetchUserInfoParams = accessToken => ({
    access_token: accessToken,
    grant_type: 'authorization_code'
});

export async function fetchUser() {
    let accessToken = store.getState().auth.tokens.access_token;
    let result = await get(genUrl('/user', fetchUserInfoParams(accessToken)));
    return result;
}


