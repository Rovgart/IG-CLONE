import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { encryptPassword, validPassword } from "../service/passCrypt.js";

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
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
		res
			.status(500)
			.json({ message: "Server error, norlamnie dalbym tu dojabany error ale podobno tak sie nie robi wiec sam ogarnij co sie zjebalo :)", error });
	}
};

export const updateUser = async (req, res) => {
	const request = req.body;
	const userName = req.params.username;
	const hashingPass = encryptPassword(request.password);

	try {
		const user = await User.findOne({
			where: {
				username: userName,
			},
		});
		/// todo add user logic that only lets user update themselfs+
		if (user) {
			const update = await user.update({ username: request.username, email: request.email, password: hashingPass });
			res.json(update);
		} else {
			res.status(404).json({ messege: "Wrong user name passed in request" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error, ale server jest  perfecto wiec ty cos zjebales smieuc", error });
	}
};

export const deleteUser = async (req, res) => {
	const userId = req.params.id;

	try {
		const user = await User.findByPk(userId);

		if (user) {
			const deletedUser = await user.destroy();
			res.json(`sucesfully deleted user ${deletedUser.username}`);
		} else {
			res.status(404).json({ messege: "Wrong user id passed in request" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.errors[0].message });
	}
};
