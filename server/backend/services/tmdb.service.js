import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	try {
		const response = await axios.get(url, {
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${ENV_VARS.TMDB_API_KEY}`,
			},
			params: {
				api_key: ENV_VARS.TMDB_API_KEY,
			},
		});

		// Check if the response status is not 200
		if (response.status !== 200) {
			throw new Error(`Failed to fetch data from TMDB. Status: ${response.status} ${response.statusText}`);
		}

		return response.data;
	} catch (error) {
		// Log error details
		console.error("Error in fetchFromTMDB:", error.message);
		if (error.response) {
			console.error("Response Data:", error.response.data);
			console.error("Response Status:", error.response.status);
		}
		throw error; // Rethrow the error to be handled by the caller
	}
};
