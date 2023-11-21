import Post from "../models/postModel.js";

export const createPost = async (req, res) => {
	const request = req.body;

	try {
		const newPost = await Post.create({ createdBy: request.createdBy, content: request.content, contentPic: request.contentPic });
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};
export const getUserPost = async (req, res) => {
	const postCreator = req.body.username || req.body.id; /// need to add functionality for this
	try {
		const posts = await Post.findAll({
			where: {
				createdBy: postCreator,
			},
		});
		if (posts.length > 0) {
			res.status(200).json(posts);
		} else {
			res.status(404).json({ message: "no user post found, make sure the user exist and has posted" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
	}
};
