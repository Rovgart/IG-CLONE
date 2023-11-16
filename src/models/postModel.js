import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import User from "./userModel.js";

const Post = db.define("post", {
	id: {
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
});

Post.belongsTo(User, { foreignKey: "createdBy", targetKey: "username" });

export default Post;
