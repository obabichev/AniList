'use strict';

const _ = require('lodash');

const BASE_URL = 'https://anilist.co/api';

const concatParams = params => _.keys(params).map(key => `${key}=${params[key]}`).join('&');

export function genUrl(service, params){
    return `${BASE_URL}${service}?${concatParams(params)}`;
}

