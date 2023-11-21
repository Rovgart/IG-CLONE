import jwt from "jsonwebtoken";
// Verify a JWT
// const payload = { userId: "123", username: "john_doe" };
// const token = jwt.sign(payload, "secretKey", { expiresIn: "1h" });

export const verifyToken = async (token, key) => {
	try {
		return jwt.verify(token, key);
	} catch (error) {
		return error;
	}
};

export const generateToken = (user) => {
	return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY || "secretKey");
};

export const extractingToken = (token) => {
	if (typeof token === "string") {
		const [bearer, pureToken] = token.split(" ");
		return pureToken;
	}
	return { message: "wrong token format" };
};
