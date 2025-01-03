import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
	MONGO_URI: process.env.MONGO_URI || "mongodb+srv://madinagroupofenterprise64:FgZe6erIMxokCJRr@cluster0.g8770.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
	PORT: process.env.PORT || 3000,
	JWT_SECRET: process.env.JWT_SECRET || "secret",
	NODE_ENV: process.env.NODE_ENV,
	TMDB_API_KEY: "f8fee11382df9ca83acd6f6763ea35dd",
};
