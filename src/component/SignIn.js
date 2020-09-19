import React from 'react';
import { Button } from '@material-ui/core';
import classNames from 'classnames/bind';
import createMuiTheme from '@material-ui/styles/createStyles';
import Api from '../Api.js';
import styles from './SignUp.scss';
import configureStore from '../configureStore';
import { setLoading, resetLoading } from '../actions/loadingActions';
import { loginUser, returnToken, getUserId } from '../actions/userActions';
import { Link } from 'react-router-dom';
import login from '../actions/action';
import App from '../App';
import { BeforeHeader } from './Header';
import InHeader from './InHeader';

const cx = classNames.bind(styles);

const btnTheme = createMuiTheme({
	maxWidth: '10px',
	maxHeight: '10px',
	height: '100%',
	palette: { primary: '#FCBFB7' }
});

class SignIn extends React.Component {
	store = configureStore({ loading: false });

	componentDidMount() {
		this.store.dispatch(setLoading(true));
		this.store.dispatch(resetLoading());
		this.store.dispatch(loginUser());
	}

	state = {
		username: '',
		password: '',
		isLogin: false
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		Api.get('/users?username=' + this.state.username)
			.then((resp) => {
				console.log(resp.data);
				if (resp.data.length === 0) {
					alert('입력하신 id가 존재하지 않습니다!');
				} else {
					console.log('password: ' + this.state.password);
					console.log('username: ' + this.state.username);

					Api.post('/auth/token', {
						password: this.state.password,
						username: this.state.username
					})
						.then((tok) => {
							this.store.dispatch(loginUser(tok.data.access_token));
							localStorage.setItem('ACCESS_TOKEN', tok.data.access_token);
							console.log(localStorage.getItem('ACCESS_TOKEN'));
							this.setState({ isLogin: true });
							console.log(this.state.isLogin);
							login(this.state.isLogin);
						})
						.catch((error) => {
							console.log('token error : ', error);
							alert('비밀번호가 일치하지 않습니다!');
						});
				}
			})
			.catch((error) => {
				console.log('error : ', error.response);
			});
	};

	render() {
		return (
			<div style={{ height: '100%' }}>
				<BeforeHeader />
				<InHeader />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%'
					}}
				>
					<form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
						<h3>로그인</h3>
						<input
							style={{ marginBottom: '1.5rem' }}
							minHeight="1.5rem"
							placeholder="아이디"
							type="text"
							name="username"
							onChange={this.handleChange}
						/>
						<input
							style={{ marginBottom: '1.5rem' }}
							placeholder="비밀번호"
							type="password"
							name="password"
							onChange={this.handleChange}
						/>
						<Button type="submit" theme={btnTheme} fontSize="1rem" color="primary" variant="outlined">
							로그인
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignIn;
