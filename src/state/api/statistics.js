import { API_URL } from "../utils/constants";
import axios from "axios";
import authHeader from "../helpers/auth-header";

export const getStatistics = async () => {
	try {
		const { data } = await axios.get(`${API_URL}/statistics`, {
			headers: await authHeader(),
		});
		console.log("Statistics data:", data.data); // Log the response data
		return data.data;
	} catch (error) {
		console.error("Error fetching statistics: ", error);
		throw error;
	}
};