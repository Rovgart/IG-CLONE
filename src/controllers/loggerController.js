import User from "../models/userModel.js";
import { validPassword } from "../service/passCrypt.js";

export const signIn = async (req, res, _next) => {
	const reqBody = req.body;

	try {
		if (reqBody && reqBody.username && reqBody.password) {
			const user = await User.findOne({
				where: {
					username: reqBody.username,
				},
			});
			if (user && reqBody.password === user.password && reqBody.username === user.username) {
				res.status(200).json({ messages: "logged in" });
			} else {
				res.status(401).json({ message: "invalid password or login" });
			}
		} else {
			res.status(404).json({ message: "request body or header error, try again" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
