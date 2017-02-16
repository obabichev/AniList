'use strict';

import {UPDATE_USER_ACITON} from '../constatns/user';

import {fetchUser} from '../core/network/user';

const updateUserAction = user => ({
    type: UPDATE_USER_ACITON,
    user: user
});

export const fetchUserData = accessToken => {
    return dispatch => {
        fetchUser(accessToken).then(
            user => dispatch(updateUserAction(user))
        );
    }
};