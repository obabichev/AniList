'use strict';

import {get} from './rest/rest';
import {genUrl} from './urlUtil';
import {getAccessToken} from './tokenUtil';

const fetchAnimeListParams = accessToken => ({
    access_token: accessToken,
    grant_type: 'authorization_code'
});

export async function fetchAnimeList(userId) {
    let accessToken = getAccessToken();
    let result = await get(genUrl(`/user/${userId}/animelist`, fetchAnimeListParams(accessToken)));
    return result.lists;
}