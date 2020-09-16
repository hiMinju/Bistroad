import React, { Component } from 'react';
import Store from './Store';

class StoreList extends Component {
	static defaultProps = {
		data: []
	};
	// URL에서 정보 얻기 가능?
	render() {
		const { data } = this.props;
		const list = data.map((info) => <Store key={data.id} info={data} />);
		console.log(list);
		return <div>{list}</div>;
	}
}

export default StoreList;
