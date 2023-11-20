import User from "../models/userModel.js";

export const isUserCheck = async (userName) => {
	try {
		const user = await User.findOne({
			where: {
				username: userName,
			},
		});
		return user ? user : null;
	} catch (error) {
		return { message: "server error try again" };
	}
};
