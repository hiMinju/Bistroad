import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.scss';
import { Link } from 'react-router-dom';
import InHeader from './InHeader';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const cx = classNames.bind(styles);

const Home = () => (
	<div>
		<InHeader />
		<Typography component="div" align="center">
			<Container maxWidth="md">
				<div className={cx('home')}>
					Bistroad는<br />작은 가게라는 뜻의 'Bistro'와<br />길이라는 뜻의'Road'의 합성어입니다.
				</div>
				<Link to="/store">
					<button style={{ border: '1px' }}>가게 페이지</button>
				</Link>
			</Container>
		</Typography>
	</div>
);

export default Home;
