import User from "../models/userModel.js";
import { encryptPassword, validPassword } from "../service/passCrypt.js";
import { userCredentialsCheck } from "../service/userCredentialsCheck.js";
import { verifyToken, extractingToken } from "../service/jwtToken.js";

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Server errors", error: error.errors[0].message });
	}
};

export const getUser = async (req, res) => {
	const userName = req.params.username;
	try {
		const user = await User.findOne({
			where: {
				username: userName,
			},
		});
		if (user) {
			res.status(200).json({ id: user.id, username: user.username });
		} else {
			res.status(404).json({ messege: "Cant find user" });
		}
	} catch (error) {
		res.status(500).json({ messege: "Internal server error" });
	}
};

export const createUser = async (req, res) => {
	const request = req.body;
	const hashingPass = encryptPassword(request.password);
	try {
		const newUser = await User.create({ username: request.username, email: request.email, password: hashingPass });

		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: "Server error, norlamnie dalbym tu dojabany error alelo :)", error });
	}
};

export const updateUser = async (req, res) => {
	const requestBody = req.body;
	const currentUserName = req.params.username;
	const currentPassword = requestBody.password;

	const newPassword = requestBody.newPassword;
	const newUsername = requestBody.newUsername;
	const newPassHashed = encryptPassword(newPassword);
	/////todo making sure the user id matches jwt

	try {
		const userCredentials = await userCredentialsCheck(currentUserName, currentPassword);

		if (userCredentials.result) {
			const user = userCredentials.user;
			const updatedUser = await user.update({ username: newUsername, password: newPassHashed, email: requestBody.email });
			res.status(200).json(updatedUser);
			//
		} else {
			res.status(404).json(userCredentials);
		}
	} catch (error) {
		res.status(500).json({ message: "server error " });
	}
};

export const deleteUser = async (req, res) => {
	const userName = req.params.username;
	const password = req.body.password;
	const token = req.headers.authorization;
	const pureToken = extractingToken(token);

	if (!token) {
		return res.status(401).json({ message: "Unauthorized - Token missing" });
	}

	try {
		const userToken = await verifyToken(pureToken, "secretKey");
		const userCredentials = await userCredentialsCheck(userName, password);
		const user = userCredentials.user;

		if (userCredentials.result && userToken.id === user.id && userToken.username === user.username) {
			//
			const deletedUser = await user.destroy();
			res.status(200).json({ message: `sucesfully deleted user ${deletedUser.username}` });
			//
		} else {
			// this checks if the user is in db and gives difrient error based on that
			res.status(404).json({ message: userCredentials.result ? "incorect webtoken" : "no user was found" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

export const test = async (req, res) => {
	const userName = req.body.username;
	const password = req.body.password;

	try {
		const testJson = await userCredentialsCheck(userName, password);
		if (testJson.result) {
			console.log("ahaahaha dziala kurwa ");
		}
		res.json(testJson);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
