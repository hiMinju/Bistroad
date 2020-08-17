import axios from 'axios';

const Api = axios.create({
	baseURL: 'https://api.bistroad.kr/v1'
});

export default Api;
