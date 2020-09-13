import React, { Component, useState } from 'react';
import { rgbToHex, hexToRgb } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import StoreList from './StoreList';

class Store extends Component {
	static defaultProps = {
		info: {
			id: 'id',
			storeId: 'storeId',
			storeName: 'store',
			name: 'name',
			description: 'description',
			price: 0,
			photoUri: 'null',
			stars: 0
		}
	};
	render() {
		const { id, storeId, name, storeName, description, price, photoUri, stars } = this.props.info;
		const { params } = this.props.match;

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
				<h1 style={{ textAlign: 'left', display: 'inline', marginRight: '2rem' }}>{storeName}</h1>
				<h3 style={{ textAlign: 'left', display: 'inline' }}>{params.storeId}</h3>
				<p />
				<div style={{ textAlign: 'left', marginTop: '5rem' }}>메뉴 리스트</div>

				<div>{name}</div>
			</Typography>
		);
	}
}
// function Store() {
// 	const [ list, setList ] = useState('');

// 	// setList(StoreList('3fa85f64-5717-4562-b3fc-2c963f66afa6'));

// 	return (

// 	);
// }

export default Store;
