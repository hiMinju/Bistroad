import React from 'react';
import { Button } from '@material-ui/core';
import classNames from 'classnames/bind';
import createMuiTheme from '@material-ui/styles/createStyles';

import styles from './SignUp.scss';

const cx = classNames.bind(styles);

const btnTheme = createMuiTheme({
	maxWidth: '30px',
	maxHeight: '30px',
	minWidth: '30px',
	minHeight: '30px',
	palette: { primary: '#FCBFB7' }
});

class Signup extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();

		this.props.handleAccount({
			email: e.target.email.value,
			pwd: e.target.pwd.value,
			nickname: e.target.nickname.value,
			name: e.target.name.value
		});
	};

	render() {
		return (
			<div>
				<h3>회원가입</h3>
				<form onSubmit={this.handleSubmit} style={{ display: 'inline-block' }}>
					<table className={cx('table')}>
						<tbody>
							<tr>
								<td colSpan="2" className={cx('th')}>
									이름
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input type="text" name="name" />
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									아이디
								</td>
							</tr>
							<tr className={cx('td')}>
								<td>
									<input type="password" name="nickname" />
								</td>
								<td>
									<button className={cx('button')}>중복확인</button>
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									비밀번호
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input type="text" name="pwd" />
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									핸드폰
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('td')}>
									<input type="text" name="phone" />
								</td>
							</tr>
							<tr>
								<td colSpan="2" className={cx('th')}>
									유형
								</td>
							</tr>
							<tr className={cx('type')}>
								<td>
									<input type="radio" name="chk_info" value="customer" />손님
								</td>
								<td>
									<input type="radio" name="chk_info" value="owner" />점주
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
		);
	}
}

export default Signup;
