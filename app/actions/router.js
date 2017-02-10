'use strict';

import {OPEN_PROFILE_SCREEN, OPEN_ANIME_LIST_SCREEN} from '../constatns/router';

export const openProfileScreen = () => ({
    type: OPEN_PROFILE_SCREEN,
    route: 'PROFILE'
});

export const openAnimeListScreen = () => ({
    type: OPEN_ANIME_LIST_SCREEN,
    route: 'ANIME_LIST'
});