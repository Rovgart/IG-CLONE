import jwt from "jsonwebtoken";
// Verify a JWT
const payload = { userId: "123", username: "john_doe" };
const token = jwt.sign(payload, "secretKey", { expiresIn: "1h" });

export const verifyToken = async (token, key) => {
	try {
		return jwt.verify(token, key);
	} catch (error) {
		return error;
	}
};

export const generateToken = (user) => {
	return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET_KEY || "secretKey", {
		expiresIn: "2h",
	});
};
const test = generateToken({ id: "2", username: "testname" });

console.log(test);
console.log(verifyToken(test, "secretKey"));
