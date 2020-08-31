import React from 'react';
import { Button } from '@material-ui/core';
import classNames from 'classnames/bind';
import createMuiTheme from '@material-ui/styles/createStyles';
import Api from '../Api.js';
import styles from './SignUp.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const cx = classNames.bind(styles);

const btnTheme = createMuiTheme({
	maxWidth: '30px',
	maxHeight: '30px',
	minWidth: '30px',
	minHeight: '30px',
	palette: { primary: '#FCBFB7' }
});

class SignIn extends React.Component {
	store = createStore(
		(state) => state,
		{ loading: false, name: '예제' },
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	state = {
		id: '',
		username: '',
		password: '',
		fullName: '',
		phone: '',
		role: ''
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
				console.log('id: ' + this.state.id);
				this.state = resp;
			})
			.catch((error) => {
				console.log('error : ', error.response);
			});
	};

	render() {
		return (
			<div>
				<Provider store={this.store} />
				<h3>로그인</h3>
				<form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
					<table className={cx('table')}>
						<tbody>
							<tr className={cx('td')}>
								<td>
									<input placeholder="아이디" type="text" name="username" onChange={this.handleChange} />
								</td>
							</tr>
							<tr>
								<td className={cx('td')}>
									<input placeholder="비밀번호" type="password" name="pwd" onChange={this.handleChange} />
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<Button
										theme={btnTheme}
										fontSize="1rem"
										color="primary"
										variant="outlined"
										onClick={this.handleSubmit}
									>
										로그인
									</Button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		);
	}
}

export default SignIn;
