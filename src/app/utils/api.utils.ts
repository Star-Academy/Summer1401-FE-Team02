export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const USER_ONE = BASE_URL + '/user/one';
export const USER_LOGIN = BASE_URL + '/user/login';
export const USER_SIGNUP = BASE_URL + '/user/register';
export const USER_AUTHENTICATE = BASE_URL + '/user/auth';
export const USER_UPDATE = BASE_URL + '/user/alter';

export const GAME_ONE = BASE_URL + '/one/';
export const GAME_GENRES = BASE_URL + '/genres';
export const GAME_PLATFORMS = BASE_URL + '/platforms';
export const GAME_MODES = BASE_URL + '/game-modes';
export const GAME_PERSPECTIVES = BASE_URL + '/player-perspectives';
export const GAME_UPCOMING = BASE_URL + '/upcoming';
export const GAME_SEARCH = BASE_URL + '/search';

export const POST_INIT = {
    method: 'post',
    headers: {
        'Content-type': 'application/json',
    },
};
