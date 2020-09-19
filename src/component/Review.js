import React, { Component } from 'react';
import Api from '../Api';
import StoreInfo from './StoreInfo';
import ReviewList from './ReviewList';

class Review extends Component {
	state = {};

	componentDidMount() {
		this._getReviewList();
		this._getStoreInfo();
	}

	_renderReview = () => {
		const reviews = this.state.reviews.map((review, index) => {
			console.log(review);
			return (
				<ReviewList
					orderId={review.orderId}
					writerId={review.writerId}
					contents={review.contents}
					stars={review.stars}
					key={review.orderId}
				/> //key prop으로 index 작성
			);
		});
		return reviews;
	};

	_getReviewList = async () => {
		const reviews = await this._callApi(); // _callApi 함수가 끝날 때까지 기다림
		this.setState({
			reviews
		});
	};

	_callApi = () => {
		const { params } = this.props.match;

		return Api.get('/reviews?itemId=' + params.itemId).then((resp) => resp.data).catch((err) => console.log(err));
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
		console.log('params: ' + { params });
		console.log('storeInfo: ' + params.storeId);

		return Api.get('/stores/' + params.storeId).then((resp) => resp.data).catch((err) => console.log(err));
	};

	render() {
		const { reviews, storeInfo } = this.state;

		return (
			<div>
				<div>{storeInfo ? this._renderStore() : 'Loading Store'}</div>

				<div>review</div>
				<div>
					{// 데이터가 없다면 'Loading'을 띄우고, 있으면 menu list가 보이도록 한다.
					reviews ? this._renderReview() : 'Loading'}
				</div>
			</div>
		);
	}
}

export default Review;
