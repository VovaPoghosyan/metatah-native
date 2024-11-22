import axios from "axios";
import authHeader from "../helpers/auth-header";
import { API_URL } from "../utils/constants";
import {
	removeItemFromStorage,
	setItemInStorage,
} from "../async-storage/asyncStorage";

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
		const { step, data: requestData } = payload;

		const response = await axios.post(
			`${API_URL}/register/step-${step}`,
			requestData,
			{
				headers: {
					"Content-Type": "multipart/form-data",
				},
			}
		);
		console.log("User data:", response); // Log the response data

		response.data?.data?.token &&
			(await setItemInStorage("token", response.data?.data.token));
		return response;
	} catch (error) {
		console.error(Object.values(error.response.data.data));
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

export const logoutUser = async () => {
	const token = await authHeader();
	try {
		const { status } = await axios.post(
			`${API_URL}/logout`,
			{},
			{
				headers: token,
			}
		);

		await removeItemFromStorage("token");
		return status;
	} catch (error) {
		console.error("Error logging out user: ", error.response.data.message);
		throw error;
	}
};
