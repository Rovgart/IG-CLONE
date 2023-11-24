import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../config/dbConfig.js";
import Follow from "./followsModel.js";

const User = db.define("user", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false,
		defaultValue: "USER",
	},
	following: {
		type: DataTypes.INTEGER,
	},
	followers: {
		type: DataTypes.INTEGER,
	},
});

export default User;
