'use strict';

import {authRequest} from '../network/auth';
import {openProfileScreen} from './router';

import {AUTH} from '../constatns/auth';

const auth = (user) => ({
    type: AUTH,
    user: user
});

export const login = (user) => {
    return (dispatch) => {
        authRequest(user).then(
            result => {
                dispatch(auth({
                    ...user,
                    id: result.user.id
                }));
                dispatch(openProfileScreen());
            },
            error => console.log('Error:' + error.message)
        );
    };
};