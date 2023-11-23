import { DataTypes } from "sequelize";
//import Profile from "./profileModel.js";
import db from "../config/dbConfig.js";
import User from "./userModel.js";

const Post = db.define("post", {
	postId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	createdBy: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	content: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	contentPic: {
		type: DataTypes.BLOB,
		allowNull: true,
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

Post.belongsTo(User, { foreignKey: "createdBy", targetKey: "username" });
// Post.belongsTo(Profile, { foreignKey: "profileId" });

export default Post;
