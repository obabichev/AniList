'use strict';

import {SHOW_ANIME_LIST} from '../constatns/anime';
import {fetchAnimeList} from '../network/anime';

const show = animeList => ({
    type: SHOW_ANIME_LIST,
    animeList: animeList
});

export const showAnimeList = (user) => {
    return dispatch => {
        //todo network request


        let list = [
            {series_title: 'title 1'},
            {series_title: 'title 2'}
        ];

        fetchAnimeList(user).then(
            animeList => dispatch(show(animeList)),
            e => console.log(`Error: ${e.message}`)
        );
    }
};