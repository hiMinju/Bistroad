import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
// import { MdLock } from 'react-icons/md';

const cx = classNames.bind(styles);

const Header = () => (
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
);

export default Header;
