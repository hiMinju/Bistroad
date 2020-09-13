import React, { Component } from 'react';
import Store from './Store';

class StoreList extends Component {
	static defaultProps = {
		data: []
	};
	// URL에서 정보 얻기 가능?
	render() {
		const { params } = this.props.match;
		const { data } = this.props;
		const storeId = params.storeId;
		const list = data.map((info) => <Store key={info.id} info={info} />);
		return <div>{list}</div>;
	}
}

export default StoreList;
