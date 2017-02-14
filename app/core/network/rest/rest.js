'use strict';

export async function get(path) {

    let result = await fetch(path, {
        method: 'GET'
    });

    console.log(`GET: ${path}, status:${result.status}`);
    return result.json();
}

export async function post(path, body) {

    let result = await fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body?JSON.stringify(body):null
    });

    console.log(`POST: ${path}, status:${result.status}`);
    return result.json();
}