'use strict';

import {OPEN_LAUNCH_SCREEN, OPEN_PROFILE_SCREEN, OPEN_ANIME_LIST_SCREEN} from '../constatns/router';
import {LAUNCH_SCREEN, PROFILE_SCREEN, ANIME_LIST_SCREEN} from '../constatns/screens';

export const openLaunchScreen = () => ({
    type: OPEN_LAUNCH_SCREEN,
    route: LAUNCH_SCREEN
});

export const openProfileScreen = () => ({
    type: OPEN_PROFILE_SCREEN,
    route: PROFILE_SCREEN
});

export const openAnimeListScreen = () => ({
    type: OPEN_ANIME_LIST_SCREEN,
    route: ANIME_LIST_SCREEN
});
