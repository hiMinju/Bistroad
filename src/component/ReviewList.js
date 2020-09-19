import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Store.css';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link, useHistory } from 'react-router-dom';
import Api from '../Api';

// handleClick = (e) => {
// 	// alert(id);
// 	console.log(id);
// 	review();
// };

function ReviewList({ writerId, orderId, contents, stars, photoUri }) {
	const history = useHistory();

	const [ user, setUser ] = useState(null);

	const review = (id) => {
		console.log(id);
		let path = '/item/' + id;
		history.push(path);
	};

	const _callUserApi = async () => {
		Api.get('/users/' + writerId).then((resp) => resp.data.fullName).catch((err) => console.log(err));
	};

	const _getUserInfo = async () => {
		const userInfo = await _callUserApi();
		console.log(userInfo);
		return userInfo;
	};

	const renderUser = () => {
		_getUserInfo().then((user) => {
			console.log('user: ' + user);
			setUser(user);
		});
		return <div>{user}</div>;
	};

	return (
		<div className="menu">
			<div className="menu_column">
				<ReviewImage image={photoUri} />
			</div>

			<div className="menu_column">
				<h1>
					{// 데이터가 없다면 'Loading'을 띄우고, 있으면 menu list가 보이도록 한다.
					user === null ? renderUser() : 'username'}
				</h1>
				<div className="menu_description">
					<LinesEllipsis text={contents} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
				</div>
				<div className="menu_star">{stars}</div>
			</div>
		</div>
	);
}

function ReviewImage({ photoUri }) {
	// return <img src={photoUri} alt="음식 이미지" className="foodImage" />;
	return (
		<img
			src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20200416_191%2F1587005465013afNYI_JPEG%2F%25BE%25F7%25C3%25BC%25C0%25DA%25C3%25BC_20200416_327581_%25B7%25B9%25B5%25E5175-%25B4%25EB%25C4%25A1%25BF%25AA%25C1%25A1_175%25B6%25B1%25BA%25BA%25C0%25CC_1080x640.jpg"
			alt="음식 이미지"
			className="menuImage"
		/>
	);
}

ReviewList.propTypes = {
	writerId: PropTypes.string.isRequired,
	orderId: PropTypes.string.isRequired,
	contents: PropTypes.string.isRequired,
	photoUri: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired
};

export default ReviewList;
