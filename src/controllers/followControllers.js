import User from "../models/userModel.js";
import Follow from "../models/followsModel.js";
import { isUserCheck } from "../service/userCredentialsCheck.js";

export const followUser = async (req, res) => {
	const whoWillFollow = req.body.followerUsername;
	const usrFollowed = req.body.followingUsername;

	try {
		const newFollower = await Follow.create({ followerUsername: whoWillFollow, followingUsername: usrFollowed });
		res.status(200).json(newFollower);
	} catch (error) {
		res.status(500).json({ message: "server Error", error });
	}
};

export const getUserFollowers = async (req, res) => {
	const username = req.body.username;

	try {
		const followers = await Follow.findAll({
			where: {
				followingUsername: username,
			},
		});

		const followersUsernames = followers.map((followModel) => followModel.followerUsername);

		res.status(200).json({ followers: followersUsernames });
	} catch (error) {
		res.status(500).json({ message: "server Error", error });
	}
};

export const getUserFollowing = async (req, res) => {
	const username = req.body.username;

	try {
		const following = await Follow.findAll({
			where: {
				followerUsername: username,
			},
		});

		const followingUsernames = following.map((followModel) => followModel.followingUsername);

		res.status(200).json({ following: followingUsernames });
	} catch (error) {
		res.status(500).json({ message: "server Error", error });
	}
};

export const userFollowedPosts = async (req, res) => {
	req.body;
};

/// idea kiedy bedzie profil to bedziesz mogl dac go do getuserfollowin i followers zmapowac same nazyu uzytkownikow i wpierdolic w finallProfile where usernames =
// usernama z followerow i ez masz zrobiony buffer moze nie wiem
