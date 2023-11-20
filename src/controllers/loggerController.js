import { userCredentialsCheck } from "../service/userCredentialsCheck.js";
import { generateToken } from "../service/jwtToken.js";

export const signIn = async (req, res) => {
	const reqBody = req.body;
	const password = reqBody.password;
	const username = reqBody.username;

	try {
		const userCredentials = await userCredentialsCheck(username, password);
		if (userCredentials.result) {
			const userToken = generateToken(userCredentials.user);

			res.status(200).json({ user: userCredentials.user, accesToken: userToken });
		} else {
			res.status(401).json({ message: "unauthorized" });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
