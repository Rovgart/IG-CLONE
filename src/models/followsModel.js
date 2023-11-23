import db from "../config/dbConfig.js";
import { DataTypes, Model, Sequelize } from "sequelize";
import User from "./userModel.js";

const Follow = db.define(
	"follow",
	{},
	{
		uniqueKeys: {
			unique_follow_relationship: {
				fields: ["followerUsername", "followingUsername"],
			},
		},
	}
);

export default Follow;
