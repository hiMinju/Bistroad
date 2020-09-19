import React, { Component } from 'react';
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

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			check: null,
			username: '',
			password: '',
			pwCheck: '',
			fullName: '',
			phone: '',
			role: '',
			usableId: false
		};
	}

	// const [ check, setCheck ] = useState(null);
	// const [ username, setUsername ] = useState('');
	// const [ password, setPassword ] = useState('');
	// const [ pwCheck, setPwCheck ] = useState('');
	// const [ fullName, setFullname ] = useState('');
	// const [ phone, setPhone ] = useState('');
	// const [ role, setRole ] = useState('');
	// const [ usableId, setUsableId ] = useState(false);

	handleSubmit = (e) => {
		e.preventDefault();
		const { username, password, fullName, phone, role, usableId } = this.state;
		if (usableId === false) {
			alert('id 중복검사를 해주세요!');
		} else if (!username || !password || !fullName || !phone || !role) {
			alert('필수항목을 작성해주세요');
		} else {
			Api.post('/users', {
				username,
				password,
				fullName,
				phone,
				role
			}).then((res) => {
				if (res.status === 400) {
					alert('다시 한 번 확인해주세요!');
				} else {
					this.props.history.push('/login');
				}
			});
		}
	};

	handleCheck = (e) => {
		e.preventDefault();

		Api.get('/users?username=' + this.state.username).then((response) => {
			if (response.data.length > 0) {
				alert('사용 불가한 아이디입니다.');
			} else {
				alert('사용 가능한 아이디 입니다.');
				this.setState({
					usableId: true
				});
			}
		});
	};

	render() {
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
											onChange={({ target: { value } }) =>
												this.setState({
													fullName: value
												})}
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
											onChange={({ target: { value } }) =>
												this.setState({
													username: value
												})}
										/>
									</td>
									<td>
										<button className={cx('button')} onClick={this.handleCheck}>
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
											onChange={({ target: { value } }) =>
												this.setState({
													password: value
												})}
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
											onChange={({ target: { value } }) =>
												this.setState({
													phone: value
												})}
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
											onChange={({ target: { value } }) =>
												this.setState({
													role: value
												})}
										/>손님
									</td>
									<td>
										<input
											type="radio"
											name="role"
											value="ROLE_STORE_OWNER"
											onChange={({ target: { value } }) =>
												this.setState({
													role: value
												})}
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
											onClick={this.handleSubmit}
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
