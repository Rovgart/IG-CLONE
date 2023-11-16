import bcrypt from "bcrypt";

const saltRound = 5;

const salt = bcrypt.genSaltSync(saltRound);

export const encryptPassword = (password) => {
	return bcrypt.hashSync(password, salt);
};

export const validPassword = (rawPassword, encryptedPassword) => {
	return bcrypt.compareSync(rawPassword, encryptedPassword);
};
