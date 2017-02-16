'use strict';

import {OPEN_LAUNCH_SCREEN, OPEN_PROFILE_SCREEN, OPEN_ANIME_LIST_SCREEN} from '../constatns/router';
import {SPLASH_SCREEN} from '../constatns/screens';

const initialRoute = {
    route: SPLASH_SCREEN
};

const router = (state = initialRoute, action) => {
    if (action.route) {
        console.log(`Switch to ${action.route}`);
    }
    switch (action.type) {
        case OPEN_LAUNCH_SCREEN:
            return {
                ...state,
                route: action.route
            };
        case OPEN_PROFILE_SCREEN:
            return {
                ...state,
                route: action.route
            };
        case OPEN_ANIME_LIST_SCREEN:
            return {
                ...state,
                route: action.route
            };
        default:
            return state;
    }
};

export default router;