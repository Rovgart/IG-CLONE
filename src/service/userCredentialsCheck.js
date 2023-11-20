import { validPassword, encryptPassword } from "./passCrypt.js";
import { isUserCheck } from "./isUserCheck.js";

/// this function checks if the user is in db and his credentials, if everyting is ok it will return him

export const userCredentialsCheck = async (userName, password) => {
	try {
		const user = await isUserCheck(userName);
		if (user) {
			const isItMatching = validPassword(password, user.password);
			if (isItMatching) {
				return { result: true, message: "correct credentials", user: user };
			} else {
				return { result: false, message: "incorrect credentials" };
			}
			//
		} else {
			return { result: false, message: "no user found" };
		}
	} catch (error) {
		return { result: false, message: "server errorss", error };
	}
};
