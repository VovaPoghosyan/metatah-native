import { API_URL } from "../utils/constants";
import axios from "axios";
import authHeader from "../helpers/auth-header";

export const getAllNotes = async () => {
	try {
		const { data } = await axios.get(`${API_URL}/notes`, {
			headers: await authHeader(),
		});
		console.log("Notes data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching notes: ", error);
		throw error;
	}
};

export const getNote = async (id) => {
	try {
		const { data } = await axios.get(`${API_URL}/notes/${id}`, {
			headers: await authHeader(),
		});
		console.log("Note data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching note: ", error);
		throw error;
	}
};

export const createNote = async (payload) => {
	try {
		const { data } = await axios.post(`${API_URL}/notes`, payload, {
			headers: await authHeader(),
		});
		console.log("Note data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const editNote = async (payload) => {
	const { id, noteData } = payload;
	try {
		const { data } = await axios.put(`${API_URL}/notes/${id}`, noteData, {
			headers: await authHeader(),
		});
		console.log("Edited note data: ", data); // Log the response data

		return data;
	} catch (error) {
		throw error;
	}
};

export const deleteNote = async (id) => {
	try {
		const response = await axios.delete(`${API_URL}/notes/${id}`, {
			headers: await authHeader(),
		});

		return response;
	} catch (error) {
		console.error(error.response.data.message);
		throw error;
	}
};
