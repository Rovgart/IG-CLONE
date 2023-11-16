import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
	const request = req.body;

	try {
		const newPost = await Post.create({ createdBy: request.createdBy, content: request.content, contentPic: request.contentPic });
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
/// mayvbe change it to body request
export const getUserPost = async (req, res) => {
	const userName = req.body.username;
	try {
		// console.log(userName);
		const posts = await Post.findAll({
			where: {
				createdBy: userName,
			},
		});
		if (posts.length > 0) {
			res.json(posts);
		} else {
			res.json({ message: "no user post found, make sure the user exist and has posted" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
