import Api from '../Api.js';

export async function signIn({ username, password }) {
	//api 사용으로 변경
	const resp = await Api.get('/users?username=' + username);
	let user = null;

	if (resp.data.length === 0) {
		alert('입력하신 id가 존재하지 않습니다!');
	} else {
		console.log('password: ' + password);
		console.log('username: ' + username);

		try {
			const token = await Api.post('/auth/token', {
				password,
				username
			});
			localStorage.setItem('ACCESS_TOKEN', token.data.access_token);

			const result = await Api.get('users/me', {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
				}
			});

			user = result.data;
		} catch (error) {
			alert('비밀번호가 잘못 입력되었습니다!');

			console.log('error: ' + error);
		}

		if (user === undefined) throw new Error();
		return user;
	}
}
