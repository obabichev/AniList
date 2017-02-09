'use strict';

import {authRequest} from '../network/auth';

export const auth = (user) => ({
    type: 'AUTH',
    user: user
});



export const login = (user) => {
    return (dispatch) => {
        authRequest(user).then(
            result => {
                console.log('result: ' + JSON.stringify(result));
                dispatch(auth({
                    ...user,
                    id: result.user.id
                }));

                //todo change screen
                // dispatch();
            },
            error => console.log('Error:' + error.message)
        );
    };
};