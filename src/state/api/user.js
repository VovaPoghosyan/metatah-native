import axios from "axios";
import authHeader from "../helpers/auth-header";
import { API_URL } from "../utils/constants";
import { setItemInStorage } from "../async-storage/asyncStorage";

export const getUser = async () => {
	try {
		const { data } = await axios.get(`${API_URL}/user`, {
			headers: await authHeader(),
		});
		console.log("User data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching user: ", error);
		throw error;
	}
};

export const registerUser = async (payload) => {
	try {
		const { data } = await axios.post(`${API_URL}/register`, payload, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		console.log("User data:", data); // Log the response data

		await setItemInStorage("token", data.data.token);
		return data;
	} catch (error) {
		console.error("Error registering user: ", error);
		throw error;
	}
};

export const loginUser = async (payload) => {
	try {
		const { data } = await axios.post(`${API_URL}/login`, payload);
		console.log("User data: ", data); // Log the response data

		await setItemInStorage("token", data.data.token);
		return data;
	} catch (error) {
		// console.error("Error logging in user: ", error);
		throw error;
	}
};
