import React, { Component, useState } from 'react';
import { hexToRgb } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import StoreList from './StoreList';
import Api from '../Api';

class Store extends Component {
	// state = {
	// 	information: [
	// 		{
	// 			id: 'id',
	// 			storeId: 'storeId',
	// 			name: 'name',
	// 			description: 'description',
	// 			price: 0,
	// 			photoUri: null,
	// 			starts: 0
	// 		}
	// 	]
	// };
	// static defaultProps = {
	// 	info: []
	// };
	constructor(props) {
		super(props);
		this.state = { info: [], params: this.props.match.params };

		this.setState({ storeId: this.state.params.storeId });
		Api.get('/stores/' + this.state.params.storeId + '/items').then((resp) => {
			console.log(this.state.params.storeId);
			console.log(resp);
			this.setState({ info: resp.data });
			console.log(this.state.info);
		});
	}

	componentDidMount() {
		this.setState({ storeId: this.state.params.storeId });
		Api.get('/stores/' + this.state.params.storeId + '/items').then((resp) => {
			console.log(this.state.params.storeId);
			console.log(resp);
			this.setState({ info: resp.data });
			console.log(this.state.info);
		});
	}

	render() {
		// const { id, storeId, name, storeName, description, price, photoUri, stars } = this.props.info;
		// const { params } = this.props.match;
		// Api.get('/stores/' + params.storeId + '/items').then(this.setState({ information: [ Response.data ] }));
		const resp = Api.get('/stores');
		console.log(resp);
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
				<h1 style={{ textAlign: 'left', display: 'inline', marginRight: '2rem' }} />
				<h3 style={{ textAlign: 'left', display: 'inline' }} />
				<p />
				<div style={{ textAlign: 'left', marginTop: '5rem' }}>메뉴 리스트</div>
				<div />
				<StoreList data={this.state.info} />
			</Typography>
		);
	}
}
export default Store;
