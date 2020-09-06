import { SET_LOADING, RESET_LOADING } from '../actions/loadingActions';

const initState = false;

export default function reducer(state = initState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'SET_LOADING': {
			return {
				...state,
				loading: payload
			};
		}
		case 'RESET_LOADING': {
			return {
				...state,
				loading: false
			};
		}
		default:
			return state;
	}
}
