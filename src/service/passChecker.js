import { validPassword, encryptPassword } from "./passCrypt.js";
import User from "../models/userModel.js";

export const isPasswordMatching = async (userName, password) => {
	try {
		const user = await User.findOne({
			where: { username: userName },
		});
		if (user) {
			const isItMatching = validPassword(password, user.password);
			return { result: isItMatching, message: isItMatching ? "Password is valid" : "Invalid password" };
			//
		} else {
			return { result: false, message: "no user found" };
		}
	} catch (error) {
		return { result: false, message: "server error", error };
	}
};
