import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Server errors" });
	}
};

export const getUser = async (req, res) => {
	const userId = req.params.id;
	try {
		const user = await User.findByPk(userId);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ messege: "Cant find user" });
		}
	} catch (error) {
		res.status(500).json({ messege: "Internal server error" });
	}
};

export const createUser = async (req, res) => {
	const request = req.body;

	try {
		const newUser = await User.create({ username: request.username, email: request.email, password: request.password });
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.errors[0].message });
	}
};

export const updateUser = async (req, res) => {
	const request = req.body;
	const userId = req.params.id;

	try {
		const user = await User.findByPk(userId);
		/// todo add user logic that only lets user update themselfs+

		if (user) {
			const update = await user.update({ username: request.username, email: request.email, password: request.password });
			res.json(update);
		} else {
			res.status(404).json({ messege: "Wrong user id passed in request" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.errors[0].message });
	}
};
