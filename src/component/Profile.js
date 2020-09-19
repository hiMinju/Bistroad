import React, { useState, Component } from 'react';

import QRCode from 'qrcode';
import storeQR from './StoreQR';

class Profile extends Component {
	componentDidMount() {
		this.generateQR();
	}

	generateQR = () => {
		let str = 'https://api.bistroad.kr/v1/stores/368056a5-bffb-4db7-bbb5-7bae9254b826';
		console.log(str);
		QRCode.toCanvas(document.getElementById('canvas'), str, function(error) {
			if (error) console.error(error);
			else console.log('success!');
		});
	};

	render() {
		const { fullName, username, id, role, phone } = this.props.user;

		return (
			<div>
				<h1 style={{ marginLeft: '2px' }}>마이페이지</h1>
				<div style={{ marginLeft: '3rem' }}>
					<dt>fullName</dt>
					<dd>
						{fullName} {role === 'ROLE_STORE_OWNER' ? '점주님' : '손님'}
					</dd>
					<dt>Id</dt>
					<dd>{username}</dd>
					<div>
						{role === 'ROLE_STORE_OWNER' ? <storeQR /> : null}
						<canvas id="canvas" />
					</div>
					{/* <div>
					{// 데이터가 없다면 'Loading'을 띄우고, 있으면 menu list가 보이도록 한다.
					role === 'ROLE_STORE_OWNER' ? renderQr() : null}
				</div> */}
					{/* 조건문으로 role 판단하여 qrcode 출력 */}
				</div>
			</div>
		);
	}
}
// function Profile({ user }) {
// 	const { fullName, username, id, role, phone } = user || {};
// 	const [ qr, setQr ] = useState(null);
// 	// textInput must be declared here so the ref can refer to it
// 	let qrInput = React.createRef();

// 	const generateQR = (url) => {
// 		let str = url;
// 		// var canvas = document.getElementById('canvas');
// 		var canvas = qrInput.current.focus();
// 		console.log('canvas: ' + canvas);

// 		if (canvas !== null) {
// 			QRCode.toCanvas(document.getElementById('canvas'), str, function(error) {
// 				if (error) console.error(error);
// 				else console.log('success!');
// 			});
// 			setQr(url);
// 		} else {
// 			console.log(canvas);
// 		}
// 	};

// 	const renderQr = () => {
// 		// 가게 개수가 여러 개
// 		generateQR('https://api.bistroad.kr/v1/stores/368056a5-bffb-4db7-bbb5-7bae9254b826');
// 		// return <canvas id="canvas" />;
// 	};

// 	function handleLoad() {
// 		qrInput.current.focus();
// 	}

// 	return (
// 		<div>
// 			<h1 style={{ marginLeft: '2px' }}>마이페이지</h1>
// 			<dt>fullName</dt>
// 			<dd>{fullName}</dd>
// 			<dt>Name</dt>
// 			<dd>{username}</dd>
// 			<div>
// 				<canvas id="canvas" onLoad={handleLoad} ref={qrInput} />
// 			</div>
// 			<div>
// 				{// 데이터가 없다면 'Loading'을 띄우고, 있으면 menu list가 보이도록 한다.
// 				role === 'ROLE_STORE_OWNER' ? renderQr() : null}
// 			</div>
// 			{/* 조건문으로 role 판단하여 qrcode 출력 */}
// 		</div>
// 	);
// }

export default Profile;
