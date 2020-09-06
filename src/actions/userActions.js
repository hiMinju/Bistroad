export const LOGIN_USER = 'user/LOGIN_USER';
export const RETURN_TOKEN = 'user/RETURN_TOKEN';
export const GET_USERID = 'user/GET_USERID';

export const loginUser = (user) => ({
	type: LOGIN_USER,
	token: user
});

export const returnToken = (user) => ({
	type: RETURN_TOKEN
});

export const getUserId = (user) => ({
	type: GET_USERID
});
