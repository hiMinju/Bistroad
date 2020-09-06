import { LOGIN_USER, RETURN_TOKEN, GET_USERID } from '../actions/userActions';
import Api from '../Api.js';
const initState = {
	token: 0
};
export default function reducer(state = {}, action) {
	const { type, token } = action;

	switch (type) {
		case 'LOGIN_USER': {
			console.log('login');
			return {
				...state,
				...token
			};
		}
		case 'RETURN_TOKEN': {
			return {
				...token
			};
		}
		case 'GET_USERID': {
			Api.get('/users/me', 'Bearer ' + token.data.access_token);
		}
		default:
			return state;
	}
}
