import axios from "axios";
import authHeader from "../helpers/auth-header";
import { API_URL } from "../utils/constants";

export const getAllGoals = async () => {
	try {
		const { data } = await axios.get(`${API_URL}/api/goals`, {
			headers: await authHeader(),
		});
		console.log("Goals data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching goals: ", error);
		throw error;
	}
};

export const getGoal = async (id) => {
	try {
		const { data } = await axios.get(`${API_URL}/api/goals/${id}`, {
			headers: await authHeader(),
		});
		console.log("Goal data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching goal: ", error);
		throw error;
	}
};

export const createGoal = async (payload) => {
	try {
		const { data } = await axios.post(`${API_URL}/api/goals`, payload, {
			headers: await authHeader(),
		});
		console.log("Goal data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const editGoal = async (payload) => {
	const { id, goalData } = payload;
	try {
		const { data } = await axios.put(`${API_URL}/goals/${id}`, goalData, {
			headers: await authHeader(),
		});
		console.log("Edited goal data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteGoal = async (id) => {
	try {
		const response = await axios.delete(`${API_URL}/goals/${id}`, {
			headers: await authHeader(),
		});

		return response;
	} catch (error) {
		console.error(error.response.data.message);
		throw error;
	}
};
