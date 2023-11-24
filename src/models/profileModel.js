import { DataTypes, Model, Sequelize } from "sequelize";
import Post from "./postModel.js";
import db from "../config/dbConfig.js";
import User from "./userModel.js";

const Profile = db.define("profile", {
	profileId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		unique: true,
	},
	belongsTo: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	profilePic: {
		type: DataTypes.BLOB,
		allowNull: true,
	},
});

export default Profile;
