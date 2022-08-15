export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const USER_ONE = BASE_URL + '/user/one';
export const USER_LOGIN = BASE_URL + '/user/login';
export const USER_SIGNUP = BASE_URL + '/user/register';
export const USER_AUTHENTICATE = BASE_URL + '/user/auth';
export const USER_UPDATE = BASE_URL + '/user/alter';
export const USER_PASSWORD_UPDATE = BASE_URL + '/user/change-password';

export const GAME_ONE = BASE_URL + '/one/';
export const GAME_GENRES = BASE_URL + '/genres';
export const GAME_PLATFORMS = BASE_URL + '/platforms';
export const GAME_MODES = BASE_URL + '/game-modes';
export const GAME_PERSPECTIVES = BASE_URL + '/player-perspectives';
export const GAME_UPCOMING = BASE_URL + '/upcoming';
export const GAME_SEARCH = BASE_URL + '/search';

export const WISHLIST_ALL = BASE_URL + '/wishlist/all';
export const WISHLIST_ADD = BASE_URL + '/wishlist/add';
export const WISHLIST_REMOVE = BASE_URL + '/wishlist/remove';

export const FAVORITES_ALL = BASE_URL + '/favorites/all';
export const FAVORITES_ADD = BASE_URL + '/favorites/add';
export const FAVORITES_REMOVE = BASE_URL + '/favorites/remove';

export const POST_INIT = {
    method: 'post',
    headers: {
        'Content-type': 'application/json',
    },
};

export const DELETE_INIT = {
    method: 'delete',
    headers: {
        'Content-type': 'application/json',
    },
};
