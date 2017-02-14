'use strict';

import {AUTH} from '../constatns/auth';
import {REHYDRATE} from 'redux-persist/constants'

const initState = {
    tokens: {
        access_token: null,
        refresh_token: null,
        code: null
    }
};

const auth = (state = initState, action) => {
    console.log(`auth state: ${JSON.stringify(state)}`);
    switch (action.type) {
        case REHYDRATE:
            let incoming = action.payload.auth;
            console.log(`REHYDRATE: ${incoming} ${JSON.stringify(incoming)}`);
            if (incoming) return {...state, ...incoming};
            return state;
        case AUTH:
            return {
                ...state,
                tokens: action.tokens
            };
        default:
            return state;
    }
};

export default auth;