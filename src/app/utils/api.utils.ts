export const BASE_URL = 'https://api.bijanprogrammer.com/games';

export const USER_LOGIN = BASE_URL + '/user/login';
export const USER_SIGNUP = BASE_URL + '/user/register';
export const USER_AUTHENTICATE = BASE_URL + '/user/auth';

export const POST_INIT = {
    method: 'post',
    headers: {
        'Content-type': 'application/json',
    },
};

export const GET_INIT = {
    method: 'get',
    headers: {
        'Content-type': 'application/json',
    },
};
