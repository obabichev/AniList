'use strict';

const auth = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH':
            console.log(`AUTH REDUCER state:${JSON.stringify(state)} action:${JSON.stringify(action)}`);
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default auth;