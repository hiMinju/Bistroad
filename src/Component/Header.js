import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export function BeforeHeader() {
	return (
		<header>
			<div className={cx('header')}>
				<ul className={cx('ul')}>
					<li className={cx('li')}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/signUp">
							회원가입
						</Link>
					</li>
					<li className={cx('bar')}>|</li>
					<li className={cx('li')}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/signIn">
							로그인
						</Link>
					</li>
					<li className={cx('bar')}>|</li>
					<li className={cx('li')}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/myPage">
							마이페이지
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
	// if (!localStorage.getItem('ACCESS_TOKEN')) {
	// 	console.log('!accesstoken');

	// } else {
	// 	console.log('accesstoken');

	// }
}

export function AfterHeader() {
	return (
		<header>
			<div className={cx('header')}>
				<ul className={cx('ul')}>
					<li className={cx('li')}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/signIn">
							로그아웃
						</Link>
					</li>
					<li className={cx('bar')}>|</li>
					<li className={cx('li')}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/myPage">
							마이페이지
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default BeforeHeader;
