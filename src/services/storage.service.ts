function setStorage(key, data, type: STOREAGETYPE = STOREAGETYPE.LOCAL) {
	type == STOREAGETYPE.LOCAL
		? localStorage.setItem(key, JSON.stringify(data))
		: sessionStorage.setItem(key, JSON.stringify(data));
}

function getStorage(key, type: STOREAGETYPE = STOREAGETYPE.LOCAL) {
	return type == STOREAGETYPE.LOCAL
		? JSON.parse(localStorage.getItem(key)!)
		: JSON.parse(sessionStorage.getItem(key)!);
}

function deleteStorage(key, type: STOREAGETYPE = STOREAGETYPE.LOCAL) {
	type == STOREAGETYPE.LOCAL
		? localStorage.removeItem(key)
		: sessionStorage.removeItem(key);
}

function cleanAllStorage(type: STOREAGETYPE = STOREAGETYPE.LOCAL) {
	type == STOREAGETYPE.LOCAL ? localStorage.clear() : sessionStorage.clear();
}
export enum STOREAGETYPE {
	LOCAL = 'LOCALSTORAGE',
	SESSION = 'SESSIONSTORAGE',
}
export { setStorage, getStorage, deleteStorage, cleanAllStorage };
