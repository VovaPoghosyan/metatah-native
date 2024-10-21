import AsyncStorage from "@react-native-async-storage/async-storage";

const setItemInStorage = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
		console.log(`${key} successfully saved`);
	} catch (e) {
		console.error(`Failed to save the ${key} to the storage`);
	}
};

const getItemFromStorage = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value;
	} catch (e) {
		console.error(`Failed to fetch the ${key} from storage`);
	}
};

const removeItemFromStorage = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
		console.log(`The ${key} successfully removed from async storage!`);
	} catch (e) {
		console.error(`Failed to remove the ${key} from async storage.`);
	}
};

const clearStorage = async () => {
	try {
		await AsyncStorage.clear();
		console.log("Storage successfully cleared!");
	} catch (e) {
		console.error("Failed to clear the async storage.");
	}
};

const storeUserLoginData = async (data) => {
	try {
		await AsyncStorage.setItem("loginData", JSON.stringify(data));
		console.log("User login data stored for remember me");
	} catch (error) {
		console.error("Error storing email for remember me:", error);
	}
};

const getUserLoginData = async () => {
	try {
		const data = JSON.parse(await AsyncStorage.getItem("loginData"));
		console.log("Getting user login data for the remember me", data);
		return data !== null ? data : { email: "", password: "" };
	} catch (error) {
		console.error("Error getting stored email fo remember me:", error);
		return null;
	}
};

const clearUserLoginData = async () => {
	try {
		await AsyncStorage.removeItem("loginData");
		console.log("Login data cleared from AsyncStorage");
	} catch (error) {
		console.error("Error clearing login data from AsyncStorage:", error);
	}
};

const storeCheckStatus = async (value) => {
	try {
		await AsyncStorage.setItem("checkStatus", JSON.stringify(value));
		console.log("Check value stored for remember me");
	} catch (error) {
		console.error("Error storing check value for remember me:", error);
	}
};

const getCheckStatus = async () => {
	try {
		const checkValue = JSON.parse(
			await AsyncStorage.getItem("checkStatus")
		);
		console.log("Getting check value for remember me:", checkValue);
		return checkValue !== null ? { checkValue } : { checkValue: false };
	} catch (error) {
		console.error("Error getting check value for remember me:", error);
		return null;
	}
};

export {
	setItemInStorage,
	getItemFromStorage,
	removeItemFromStorage,
	clearStorage,
	storeUserLoginData,
	getUserLoginData,
	clearUserLoginData,
	storeCheckStatus,
	getCheckStatus,
};
