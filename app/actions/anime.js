'use strict';

import {SHOW_ANIME_LIST} from '../constatns/anime';

const show = animeList => ({
    type: SHOW_ANIME_LIST,
    animeList: animeList
});

export const showAnimeList = () => {
    return dispatch => {
        //todo network request
        let list = [
            {series_title: 'title 1'},
            {series_title: 'title 2'}
        ];

        dispatch(show(list));
    }
};