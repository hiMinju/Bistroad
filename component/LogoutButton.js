import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function LogoutButton({ logout, history }) {
	const handleClick = () => {
		logout();
		history.push('/');
	};
	return (
		<Link onClick={handleClick} style={{ textDecoration: 'none', color: 'white' }}>
			로그아웃
		</Link>
	);
}

export default withRouter(LogoutButton);
