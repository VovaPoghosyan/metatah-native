import {
	getItemFromStorage,
	removeItemFromStorage,
} from "../async-storage/asyncStorage";

export const getToken = async () => await getItemFromStorage("token");
export const removeToken = async () => await removeItemFromStorage("token");
