import React from 'react';

function Profile({ user }) {
	const { password, username } = user || {};
	return (
		<div>
			<h1>Profile</h1>
			<dt>Password</dt>
			<dd>{password}</dd>
			<dt>Name</dt>
			<dd>{username}</dd>
		</div>
	);
}

export default Profile;
