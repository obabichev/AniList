'use strict';

import {AUTH} from '../constatns/auth';

const auth = (state = {}, action) => {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default auth;