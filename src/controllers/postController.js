import Post from "../models/postModel.js";
import { Op } from "sequelize";

export const createPost = async (req, res) => {
	const request = req.body;

	try {
		const newPost = await Post.create({
			createdBy: request.createdBy,
			content: request.content,
			contentPic: request.contentPic,
			title: request.title,
		});
		res.status(201).json({ message: "created succesfully", post: newPost });
	} catch (error) {
		res.status(500).json({ message: "Server error", error });
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

export const searchPost = async (req, res) => {
	const searchQuerry = req.body.search;
	try {
		const resultTitle = await Post.findAll({
			where: {
				title: {
					[Op.like]: `%${searchQuerry}%`,
				},
			},
		});
		const resultContent = await Post.findAll({
			where: {
				content: {
					[Op.like]: `%${searchQuerry}%`,
				},
			},
		});

		//// todo logic this looks trash
		// const result =
		// 	resultContent.length > 0 && resultTitle.length > 0 ? [...resultTitle, ...resultContent] : resultTitle.length > 0 ? resultTitle : resultContent;

		if (resultTitle.length > 0 && resultContent.length > 0) {
			//
			const response = [...resultTitle, ...resultContent];
			res.status(200).json({ posts: response });
			//
		} else if (resultTitle.length > 0) {
			//
			const response = resultTitle;
			res.status(200).json({ posts: response });
			//
		} else if (resultContent.length > 0) {
			//
			const response = resultContent;
			res.status(200).json({ posts: response });
		} else {
			res.status(404).json({ message: "no posts were found try again" });
		}
	} catch (error) {
		res.status(500).json({ message: "server error" });
	}
};

