import User from "../models/userModel.js";
import { encryptPassword, validPassword } from "../service/passCrypt.js";
import { userCredentialsCheck } from "../service/userCredentialsCheck.js";
import { verifyToken, extractingToken, generateToken } from "../service/jwtToken.js";
import { isUserCheck } from "../service/userCredentialsCheck.js";

export const settingUserRoles = async (req, res) => {
	const token = req.headers.authorization;
	const pureToken = extractingToken(token);

	const username = req.params.username;
	const userToChangeRole = req.body.username;
	const changedRole = req.body.newRole;

	try {
		if (!token) {
			return res.status(404).json({ message: "unauthorized no token" });
		}
		const userToken = await verifyToken(pureToken, "secretKey");
		if (userToken.username === username && userToken.role === "ADMIN") {
			const user = await isUserCheck(userToChangeRole);
			await user.update({ role: changedRole });
		} else {
			res.status(400).json({ message: "unathorized: incorrect credentials, this will be reported" });
		}
	} catch (error) {
		res.status(500).json({ message: "server error" });
	}
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ message: "Server errors" });
	}
};

export const getUser = async (req, res) => {
	const userName = req.params.username;
	try {
		const user = await isUserCheck(userName);
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
		res.status(500).json({ message: "Server error todo more errors jakby co ," });
	}
};

export const updateUser = async (req, res) => {
	const requestBody = req.body;
	const currentUserName = req.params.username;
	const currentPassword = requestBody.password;

	const newPassword = requestBody.newPassword;
	const newUsername = requestBody.newUsername;
	let newPassHashed = undefined;

	const token = req.headers.authorization;
	const pureToken = extractingToken(token);

	if (!token) {
		return res.status(401).json({ message: "Unauthorized - Token missing" });
	}
	if (newPassword) {
		newPassHashed = encryptPassword(newPassword);
	}
	try {
		const userToken = await verifyToken(pureToken, "secretKey");
		const userCredentials = await userCredentialsCheck(currentUserName, currentPassword);
		const user = userCredentials.user;

		if (userCredentials.result && user.id === userToken.id && user.username === userToken.username) {
			//
			const updatedUser = await user.update({ username: newUsername, password: newPassHashed, email: requestBody.email });
			res.status(200).json({ message: `${user.username} succesfully updated`, accessToken: generateToken(updatedUser) });
			//
		} else {
			res.status(404).json({ message: userCredentials.result ? "incorect webtoken" : "incorect user credentials" });
		}
	} catch (error) {
		res.status(500).json({ message: "server error" });
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
			res.status(404).json({ message: userCredentials.result ? "incorect webtoken" : "incorect user credentials" });
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


