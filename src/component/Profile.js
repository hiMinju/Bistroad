import React from 'react';

function Profile({ user }) {
	const { fullName, username, id, role, phone } = user || {};
	return (
		<div>
			<h1>Profile</h1>
			<dt>fullName</dt>
			<dd>{fullName}</dd>
			<dt>Name</dt>
			<dd>{username}</dd>
			{/* 조건문으로 role 판단하여 qrcode 출력 */}
		</div>
	);
}

export default Profile;
