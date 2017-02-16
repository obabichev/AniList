'use strict';

const _ = require('lodash');

const BASE_URL = 'https://anilist.co/api';

const concatParams = params => params.join('&');

export function genUrl(service, params){
    return `${BASE_URL}${service}?${concatParams(params)}`;
}

