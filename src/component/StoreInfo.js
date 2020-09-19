import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Store.css';

const handleClick = (e) => {
	// 세부 리뷰 화면으로 이동
	alert(e);
	console.log(e);
};

function StoreInfo({ id, name, description, phone, location }) {
	return (
		<div className="store">
			<h1 style={{ display: 'flex' }}>{name}</h1>
			<h4 style={{ display: 'flex' }}>
				{location.lat} {location.lng}
			</h4>
		</div>
		// <div onClick={handleClick} className="menu">
		// 	<div className="menu_column">
		// 		<MenuImage image={photoUri} />
		// 	</div>

		// 	<div className="menu_column">
		// 		<h1>{name}</h1>
		// 		<div className="menu_description">
		// 			<LinesEllipsis text={description} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
		// 		</div>
		// 		<div className="menu_price">{price}</div>
		// 		<div className="menu_star">{stars}</div>
		// 	</div>
		// </div>
	);
}

function storeImage({ photoUri }) {
	// return <img src={photoUri} alt="음식 이미지" className="foodImage" />;
	return (
		<img
			src="https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fldb.phinf.naver.net%2F20200416_191%2F1587005465013afNYI_JPEG%2F%25BE%25F7%25C3%25BC%25C0%25DA%25C3%25BC_20200416_327581_%25B7%25B9%25B5%25E5175-%25B4%25EB%25C4%25A1%25BF%25AA%25C1%25A1_175%25B6%25B1%25BA%25BA%25C0%25CC_1080x640.jpg"
			alt="음식 이미지"
			className="menuImage"
		/>
	);
}

StoreInfo.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	location: PropTypes.object.isRequired,
	phone: PropTypes.string.isRequired
};

export default StoreInfo;
