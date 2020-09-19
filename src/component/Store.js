import React, { Component } from 'react';
import { hexToRgb } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import StoreList from './StoreList';
import StoreInfo from './StoreInfo';
import Api from '../Api';

class Store extends Component {
	state = {};

	componentDidMount() {
		this._getMenuList();
		this._getStoreInfo();
	}

	_renderMenu = () => {
		const menu = this.state.menu.map((item, index) => {
			console.log(item);
			return (
				<StoreList
					id={item.id}
					storeId={item.storeId}
					name={item.name}
					description={item.description}
					price={item.price}
					photoUri={item.photoUri}
					stars={item.stars}
					key={item.id}
				/> //key prop으로 index 작성
			);
		});
		return menu;
	};

	_getMenuList = async () => {
		const menu = await this._callApi(); // _callApi 함수가 끝날 때까지 기다림
		this.setState({
			menu
		});
	};

	_callApi = () => {
		const { params } = this.props.match;

		return Api.get('/stores/' + params.storeId + '/items')
			.then((resp) => resp.data)
			.catch((err) => console.log(err));
	};

	_renderStore = () => {
		const info = this.state.storeInfo;

		return (
			<StoreInfo
				id={info.id}
				name={info.name}
				description={info.description}
				phone={info.phone}
				location={info.location}
			/> //key prop으로 index 작성
		);
	};

	_getStoreInfo = async () => {
		const storeInfo = await this._callStoreApi();
		this.setState({
			storeInfo
		});
	};

	_callStoreApi = () => {
		const { params } = this.props.match;

		return Api.get('/stores/' + params.storeId).then((resp) => resp.data).catch((err) => console.log(err));
	};

	render() {
		// const { id, storeId, name, storeName, description, price, photoUri, stars } = this.props.info;
		// const { params } = this.props.match;
		// Api.get('/stores/' + params.storeId + '/items').then(this.setState({ information: [ Response.data ] }));

		const { menu, storeInfo } = this.state;
		return (
			<Typography
				component="div"
				// align="center"
				style={{
					backgroundColor: hexToRgb('#FEDFDB'),
					padding: '50px',
					display: 'flex',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					fontSize: '14px'
				}}
			>
				<div>{storeInfo ? this._renderStore() : 'Loading Store'}</div>
				<div style={{ textAlign: 'left', display: 'block', width: '100%' }}>메뉴 리스트</div>
				<div>
					{// 데이터가 없다면 'Loading'을 띄우고, 있으면 menu list가 보이도록 한다.
					menu ? this._renderMenu() : 'Loading'}
				</div>
			</Typography>
		);
	}
}
export default Store;
