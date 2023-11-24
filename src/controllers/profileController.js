/// get profiel, update profile, itp

import Follow from "../models/followsModel.js";
import Post from "../models/postModel.js";
import Profile from "../models/profileModel.js";
import { getUserFollowers, getUserFollowing } from "./followControllers.js";
import { getUserPost } from "./postController.js";

/// user will increment the followers and following he has its just to get the follow and following nubmers
// to get the account that is following i dont know yet what to do but i guess you just click on them, it takes from that diplayed model
/// username of the follower and sends in the request to the profile endpiint for displaying profiles

export const getUserProfile = async (req, res) => {
	const profileName = req.body.profileName;

	try {
		const profile = await Profile.findOne({
			where: {
				belongsTo: profileName,
			},
		});
		if (profile) {
			res.status(200).json({ profile: profile });
		} else {
			res.status(404).json({ message: "profile not found" });
		}
	} catch (error) {
		res.status(500).json({ message: "server error" });
	}
};

export const getUserProfilePage = async (req, res) => {
	const username = req.params.username;

	try {
		const profileModel = await Profile.findOne({
			where: {
				belongsTo: username,
			},
		});
		const profilePosts = await Post.findAll({
			where: {
				createdBy: username,
			},
		});
		const profileFollowers = await Follow.findAll({
			where: {
				followerUsername: username,
			},
		});
		const profileFollowing = await Follow.findAll({
			where: {
				followingUsername: username,
			},
		});

		if (profileModel) {
			res.status(200).json({ profileInfo: profileModel, profilePosts: profilePosts, following: profileFollowers, followers: profileFollowing });
		}
	} catch (error) {
		res.status(500).json({ message: "server error" });
	}
};
