import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

// import { Link } from 'react-router-dom';
// import { MdLock } from 'react-icons/md';

const cx = classNames.bind(styles);

const Header = () => (
	<div className={cx('header')}>
		<ul className={cx('ul')}>
			<li className={cx('li')}>회원가입</li>
			<li className={cx('bar')}>|</li>
			<li className={cx('li')}>로그인</li>
			<li className={cx('bar')}>|</li>
			<li className={cx('li')}>마이페이지</li>
		</ul>
	</div>
);

export default Header;
