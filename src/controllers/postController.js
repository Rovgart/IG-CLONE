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

export const getUserPost = async (req, res) => {
	const userName = req.params.username;
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
			res.json({ message: "could not find the username or the user has no posts" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};


