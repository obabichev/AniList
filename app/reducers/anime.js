'use strict';

import {SHOW_ANIME_LIST} from '../constatns/anime';

const initialRoute = {
    animeList: {
        anime:[]
    }
};

const anime = (state = initialRoute, action) => {
    switch (action.type) {
        case SHOW_ANIME_LIST:
            return {
                ...state,
                animeList: action.animeList
            };
        default:
            return state;
    }
};

export default anime;