'use strict';

import {OPEN_PROFILE_SCREEN} from '../constatns/router';

const initialRoute = {
    route: 'LAUNCH'
};

const router = (state = initialRoute, action) => {
    console.log(`ROUTER REDUCER state:${JSON.stringify(initialRoute)} action:${JSON.stringify(action)}`);
    switch (action.type) {
        case OPEN_PROFILE_SCREEN:
            console.log("ROUTER REDUCER: OPEN_PROFILE_SCREEN");
            return {
                ...state,
                route: 'PROFILE'
            };
        default:
            return state;
    }
};

export default router;