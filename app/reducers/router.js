'use strict';

import {
    OPEN_LAUNCH_SCREEN,
    OPEN_PROFILE_SCREEN,
    OPEN_ANIME_LIST_SCREEN,
    START_DOWNLOADING,
    STOP_DOWNLOADING
} from '../constatns/router';
import {SPLASH_SCREEN} from '../constatns/screens';

const initialRoute = {
    route: SPLASH_SCREEN,
    downloading: false,
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

        case START_DOWNLOADING:
            return {
                ...state,
                downloading: true,
            };
        case STOP_DOWNLOADING:
            return {
                ...state,
                downloading: false,
            };
        default:
            return state;
    }
};

export default router;