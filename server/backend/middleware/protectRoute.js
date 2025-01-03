import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ENV_VARS } from "../config/envVars.js";

export const protectRoute = async (req, res, next) => {
	try {
		// Extract the token from the Authorization header
		const authHeader = req.headers["authorization"];
		if (!authHeader || !authHeader.startsWith("Bearer ")) {
			return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided" });
		}

		// Extract and verify the token
		const token = authHeader.split(" ")[1];
		const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

		// Check if the decoded token contains a valid userId
		if (!decoded || !decoded.userId) {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}

		// Find the user in the database
		const user = await User.findById(decoded.userId).select("-password");
		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

		// Attach user to the request object
		req.user = user;

		// Pass control to the next middleware
		next();
	} catch (error) {
		if (error.name === "TokenExpiredError") {
			return res.status(401).json({ success: false, message: "Unauthorized - Token Expired" });
		}
		if (error.name === "JsonWebTokenError") {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}
		console.error("Error in protectRoute middleware:", error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};
