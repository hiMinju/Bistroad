import { RETURN_TOKEN } from '../actions/userActions';
import Api from '../Api.js';
const initState = {
	token: ''
};
export default (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'RETURN_TOKEN': {
			return {
				...payload.access_token
			};
		}
		default:
			return state;
	}
};
