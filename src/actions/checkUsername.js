import Api from '../Api.js';

export async function checkName({ username }) {
	const resp = await Api.get('/users?username=' + username);

	if (resp.data.length === 0) {
		return true;
	} else {
		return false;
	}
}

export default checkName;
