'use strict';

import {UPDATE_USER_ACITON} from '../constatns/user';

const initialState = {
    user: {
        id: null
    }
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_ACITON:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default user;
