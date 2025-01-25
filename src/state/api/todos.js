import axios from "axios";
import authHeader from "../helpers/auth-header";
import { API_URL } from "../utils/constants";

export const getAllTodos = async () => {
	try {
		const { data } = await axios.get(`${API_URL}/api/todos`, {
			headers: await authHeader(),
		});
		console.log("Todos data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching todos: ", error);
		throw error;
	}
};

export const getTodo = async (id) => {
	try {
		const { data } = await axios.get(`${API_URL}/api/todos/${id}`, {
			headers: await authHeader(),
		});
		console.log("Todo data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching todo: ", error);
		throw error;
	}
};

export const createTodo = async (payload) => {
	try {
		const { data } = await axios.post(`${API_URL}/api/todos`, payload, {
			headers: await authHeader(),
		});
		console.log("Todo data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const editTodo = async (payload) => {
	const { id, todoData } = payload;
	try {
		const { data } = await axios.put(`${API_URL}/api/todos/${id}`, todoData, {
			headers: await authHeader(),
		});
		console.log("Edited todo data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteTodo = async (id) => {
	try {
		const response = await axios.delete(`${API_URL}/api/todos/${id}`, {
			headers: await authHeader(),
		});

		return response;
	} catch (error) {
		console.error(error.response.data.message);
		throw error;
	}
};
