'use strict';

import {FETCH_ANIME_LIST_ACTION} from '../constatns/anime';

const initialRoute = {
    animeLists: []
};

const anime = (state = initialRoute, action) => {
    switch (action.type) {
        case FETCH_ANIME_LIST_ACTION:
            console.log(action.animeLists);
            return {
                ...state,
                animeLists: action.animeLists
            };
        default:
            return state;
    }
};

export default anime;