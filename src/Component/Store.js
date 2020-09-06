import React, { Component, useState } from 'react';
import { rgbToHex, hexToRgb } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import StoreList from './storeList';

function Store() {
	const [ list, setList ] = useState('');

	// setList(StoreList('3fa85f64-5717-4562-b3fc-2c963f66afa6'));

	return (
		<Typography
			component="div"
			align="center"
			style={{
				height: '100vh',
				backgroundColor: hexToRgb('#FEDFDB'),
				marginTop: '2rem'
			}}
		>
			<h1 style={{ textAlign: 'left', display: 'inline', marginRight: '2rem' }}>레드 175</h1>
			<h3 style={{ textAlign: 'left', display: 'inline' }}>서울 강남구 남부순환로 2942</h3>
			<p />
			<div style={{ textAlign: 'left', marginTop: '5rem' }}>메뉴 리스트</div>

			<div>{list}</div>
		</Typography>
	);
}

export default Store;
