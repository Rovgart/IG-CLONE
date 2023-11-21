import { userCredentialsCheck } from "../service/userCredentialsCheck.js";
import { generateToken, verifyToken } from "../service/jwtToken.js";

export const signIn = async (req, res) => {
	const reqBody = req.body;
	const password = reqBody.password;
	const username = reqBody.username;

	try {
		const userCredentials = await userCredentialsCheck(username, password);

		if (userCredentials.result) {
			const userToken = generateToken(userCredentials.user);

			res.status(200).json({ message: "succesfully logged in ", accesToken: userToken });
		} else {
			res.status(401).json({ message: "unauthorized", reason: userCredentials.message });
		}
	} catch (error) {
		res.status(500).json(error);
	}
};
