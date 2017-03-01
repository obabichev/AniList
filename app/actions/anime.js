'use strict';

import {FETCH_ANIME_LIST_ACTION} from '../constatns/anime';
import {fetchAnimeList} from '../core/network/anime';
import {startDownloading, stopDownloading} from './router';
import {refreshTokenAction} from './auth';

const updateAnimeListAction = animeLists => ({
    type: FETCH_ANIME_LIST_ACTION,
    animeLists: animeLists
});

export const uploadAnimeListAction = userId => {
    return dispatch => {
        return dispatch(asyncStartDownloading())
            .then(() => dispatch(refreshTokenAction()))
            .then(() => dispatch(fetchAnimeListAction(userId)))
            .then(() => dispatch(stopDownloading()));
    }
};

//todo duplicate code from actions/user.js !fix it
const asyncStartDownloading = () => {
    return dispatch => Promise.resolve().then(dispatch(startDownloading()));
};

const fetchAnimeListAction = userId => {
    return dispatch => fetchAnimeList(userId).then(
        animeLists => dispatch(updateAnimeListAction(animeLists)),
        error => AlertIOS.alert('Anime list downloading failed', error.message)
    );
};