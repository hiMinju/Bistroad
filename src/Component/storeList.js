import Api from '../Api';

export async function StoreList(storeId) {
	const list = await Api.get('stores?ownerId=' + storeId);

	if (list.length > 0) {
		return list;
	} else {
		return null;
	}
}

export default StoreList;
