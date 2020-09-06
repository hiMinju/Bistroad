import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import classNames from 'classnames/bind';
import createMuiTheme from '@material-ui/styles/createStyles';
import Api from '../Api.js';
import styles from './SignUp.scss';
import { Link } from 'react-router-dom';
import InHeader from './InHeader';
import checkName from '../actions/checkUsername';

const cx = classNames.bind(styles);

const btnTheme = createMuiTheme({
	maxWidth: '30px',
	maxHeight: '30px',
	minWidth: '30px',
	minHeight: '30px',
	palette: { primary: '#FCBFB7' }
});

function SignUp() {
	const [ check, setCheck ] = useState(null);
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ fullName, setFullname ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ role, setRole ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (check === null) {
			alert('id 중복검사를 해주세요!');
		} else {
			if (check) {
				Api.post('/users', {
					username,
					password,
					fullName,
					phone,
					role
				}).catch((error) => {
					alert('존재하는 id입니다!');
					console.log('error : ', error);
				});
			} else {
				alert('존재하는 id입니다!');
			}
		}
		// const response = Api.post('/users', {
		// 	username: this.state.username,
		// 	password: this.state.password,
		// 	fullName: this.state.fullName,
		// 	phone: this.state.phone,
		// 	role: this.state.role
		// }).catch((error) => {
		// 	console.log('error : ', error);
		// });
	};

	const handleCheck = (e) => {
		setCheck(checkName({ username }));
	};

	return (
		<div>
			<InHeader />
			<h3 style={{ display: 'block', textAlign: 'center' }}>회원가입</h3>

			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<form type="submit" style={{ display: 'inline-block' }}>
					<table className={cx('table')}>
						<tbody>
							<tr>
								<td colSpan="2" className={cx('th')}>
									이름
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input
										type="text"
										name="fullName"
										onChange={({ target: { value } }) => setFullname(value)}
									/>
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									아이디
								</td>
							</tr>
							<tr className={cx('td')}>
								<td>
									<input
										type="text"
										name="username"
										onChange={({ target: { value } }) => setUsername(value)}
									/>
								</td>
								<td>
									<button className={cx('button')} onClick={handleCheck}>
										중복확인
									</button>
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									비밀번호
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input
										type="password"
										name="password"
										onChange={({ target: { value } }) => setPassword(value)}
									/>
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									핸드폰
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input
										type="text"
										name="phone"
										onChange={({ target: { value } }) => setPhone(value)}
									/>
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									유형
								</td>
							</tr>
							<tr className={cx('type')}>
								<td>
									<input
										type="radio"
										name="role"
										value="ROLE_USER"
										onChange={({ target: { value } }) => setRole(value)}
									/>손님
								</td>
								<td>
									<input
										type="radio"
										name="role"
										value="ROLE_STORE_OWNER"
										onChange={({ target: { value } }) => setRole(value)}
									/>점주
								</td>
							</tr>
							<tr>
								<td colSpan="2">
									<Button
										theme={btnTheme}
										fontSize="1rem"
										color="primary"
										variant="outlined"
										onClick={handleSubmit}
									>
										가입하기
									</Button>
								</td>
							</tr>
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}

// class SignUp extends React.Component {
// 	state = {
// 		username: '',
// 		password: '',
// 		fullName: '',
// 		phone: '',
// 		role: ''
// 	};

// 	handleChange = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		});
// 	};

// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		if (checkName(this.state.username)) {
// 			Api.post('/users', {
// 				username: this.state.username,
// 				password: this.state.password,
// 				fullName: this.state.fullName,
// 				phone: this.state.phone,
// 				role: this.state.role
// 			}).catch((error) => {
// 				console.log('error : ', error);
// 			});
// 		} else {
// 			alert('존재하는 id입니다!');
// 		}
// 		// const response = Api.post('/users', {
// 		// 	username: this.state.username,
// 		// 	password: this.state.password,
// 		// 	fullName: this.state.fullName,
// 		// 	phone: this.state.phone,
// 		// 	role: this.state.role
// 		// }).catch((error) => {
// 		// 	console.log('error : ', error);
// 		// });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<InHeader />
// 				<div>
// 					<h3>회원가입</h3>
// 					<form type="submit" style={{ display: 'inline-block' }}>
// 						<table className={cx('table')}>
// 							<tbody>
// 								<tr>
// 									<td colSpan="2" className={cx('th')}>
// 										이름
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('td')}>
// 										<input type="text" name="fullName" onChange={this.handleChange} />
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('th')}>
// 										아이디
// 									</td>
// 								</tr>
// 								<tr className={cx('td')}>
// 									<td>
// 										<input type="text" name="username" onChange={this.handleChange} />
// 									</td>
// 									<td>
// 										<button className={cx('button')}>중복확인</button>
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('th')}>
// 										비밀번호
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('td')}>
// 										<input type="password" name="password" onChange={this.handleChange} />
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('th')}>
// 										핸드폰
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('td')}>
// 										<input type="text" name="phone" onChange={this.handleChange} />
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2" className={cx('th')}>
// 										유형
// 									</td>
// 								</tr>
// 								<tr className={cx('type')}>
// 									<td>
// 										<input
// 											type="radio"
// 											name="role"
// 											value="ROLE_USER"
// 											onChange={this.handleChange}
// 										/>손님
// 									</td>
// 									<td>
// 										<input
// 											type="radio"
// 											name="role"
// 											value="ROLE_STORE_OWNER"
// 											onChange={this.handleChange}
// 										/>점주
// 									</td>
// 								</tr>
// 								<tr>
// 									<td colSpan="2">
// 										<Button
// 											theme={btnTheme}
// 											fontSize="1rem"
// 											color="primary"
// 											variant="outlined"
// 											onClick={this.handleSubmit}
// 										>
// 											가입하기
// 										</Button>
// 									</td>
// 								</tr>
// 							</tbody>
// 						</table>
// 					</form>
// 				</div>
// 			</div>
// 		);
// 	}
// }

export default SignUp;
