import User from "../models/userModel.js";
import { validPassword } from "../service/passCrypt.js";

export const signIn = async (req, res, _next) => {
	try {
		const body = req.body;

		if (body && body.username && body.password) {
			const user = await User.findOne({
				where: {
					username: body.username,
				},
			});
			if (user && user.password === body.password && user.username === body.username) {
				res.status(200).json({ messages: "logged in" });
			} else {
				res.status(401).json({ message: "invalid password or login" });
			}
		} else {
			res.status(404).json({ message: "could not find the user" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
