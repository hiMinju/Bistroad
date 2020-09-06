import React from 'react';
import Api from '../Api.js';
import { AfterHeader, BeforeHeader } from '../component/Header';
import { Link } from 'react-router-dom';
import main from '../component/main';

const loginSuccess = (response) => {
	return {
		type: 'LOGIN_SUCCESS',
		payload: response
	};
};

const loginfail = (error) => {
	return {
		type: 'LOGIN_FAIL',
		payload: error
	};
};

export function login(isLogin) {
	if (isLogin) {
		console.log('function');
		return <main />;
	}
}

// const loginTry = (someValue) => async (dispatch, getState) => {
// 	dispatch({ type: 'LOGIN_REQUEST' });
// 	try {
// 		const response = await Api.get('/users?username=' + this.state.username)
// 			.then((resp) => {
// 				console.log(resp.data);
// 				if (resp.data.length === 0) {
// 					alert('입력하신 id가 존재하지 않습니다!');
// 				} else {
// 					console.log('password: ' + this.state.password);
// 					console.log('username: ' + this.state.username);

// 					Api.post('/auth/token', {
// 						password: this.state.password,
// 						username: this.state.username
// 					})
// 						.then((tok) => {
// 							this.store.dispatch(loginUser(tok.data.access_token));
// 							localStorage.setItem('ACCESS_TOKEN', tok.data.access_token);
// 							console.log(localStorage.getItem('ACCESS_TOKEN'));
// 							this.setState({ isLogin: true });
// 							this.props.history.replace('/');
// 						})
// 						.catch((error) => {
// 							console.log('token error : ', error);
// 							alert('비밀번호가 일치하지 않습니다!');
// 						});
// 				}
// 			})
// 			.catch((error) => {
// 				console.log('error : ', error.response);
// 			});
// 	} catch (error) {
// 		dispatch(loginFail(error));
// 	}
// };

export default login;
