'use strict';

import X2JS from 'x2js';
const x2js = new X2JS();

const animeListUrl = (userName) => `https://myanimelist.net/malappinfo.php?u=${userName}&status=all&type=anime`;

export const fetchAnimeList = async(user) => {
    console.log(`Credentionals: ${JSON.stringify(user)}`);

    let path = animeListUrl(user.login);
    console.log(`path: ${path}`);

    let result = await fetch(path, {
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

    return resultJson.myanimelist;
};