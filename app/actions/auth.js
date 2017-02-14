'use strict';

import {authRequest} from '../network/auth';
import {openProfileScreen} from './router';

import {AUTH} from '../constatns/auth';

export const auth = (tokens) => ({
    type: AUTH,
    tokens: tokens
});

// export const login = (user) => {
//     return (dispatch) => {
//         authRequest(user).then(
//             result => {
//                 dispatch(auth({
//                     ...user,
//                     id: result.user.id
//                 }));
//                 dispatch(openProfileScreen());
//             },
//             error => console.log('Error:' + error.message)
//         );
//     };
// };
