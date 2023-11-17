import User from "../models/userModel.js";
import { validPassword } from "../service/passCrypt.js";

//validPassword return boolian
//previous implementetion was easier to read but less secure

export const signIn = async (req, res) => {
	const reqBody = req.body;
	const reqPassword = reqBody.password;

	try {
		if (reqBody && reqBody.username && reqPassword) {
			const user = await User.findOne({
				where: {
					username: reqBody.username,
				},
			});
			if (user && validPassword(reqPassword, user.password) && reqBody.username === user.username) {
				res.status(200).json({ messages: "logged in" });
			} else {
				res.status(401).json({ message: "invalid password or login" });
			}
		} else {
			res.status(404).json({ message: "request body or header error, try again" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
