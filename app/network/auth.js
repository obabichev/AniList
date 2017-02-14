'use strict';

import X2JS from 'x2js';

const AUTH_URL = 'https://myanimelist.net/api/account/verify_credentials.xml';

const x2js = new X2JS();

export const authRequest = async(user) => {

    let result = await fetch(AUTH_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(`${user.login}:${user.password}`),
        }
    });

    if (result.status != 200){
        throw {
            status: result.status,
            message: await result.text()
        }
    }

    let resultXml = await result.text();
    let resultJson = x2js.xml2js(resultXml);
    return resultJson;
};

