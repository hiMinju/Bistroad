import React from 'react';
import styles from './Header.scss';
import Container from '@material-ui/core/Container';
import classNames from 'classnames/bind';
import logo from '../image/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// table에 넣기
const InHeader = () => (
	<Container align="center" className={cx('in-header')}>
		<div>
			<Link to="/">
				<img src={logo} alt="Logo" height="70" />
			</Link>
		</div>
		<hr width="100%" />
	</Container>
);

export default InHeader;
