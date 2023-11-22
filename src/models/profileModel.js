// import { DataTypes, Model, Sequelize } from "sequelize";
// import Post from "./postModel.js";
// import db from "../config/dbConfig.js";
// import User from "./userModel.js";

// const Profile = db.define("profile", {
// 	profileId: {
// 		type: DataTypes.INTEGER,
// 		primaryKey: true,
// 		autoIncrement: true,
// 		allowNull: false,
// 	},
// 	belongsTo: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 	},
// 	posts: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 		get() {
// 			return this.getDataValue("posts").split(";");
// 		},
// 		set(val) {
// 			this.setDataValue("posts", val.join(";"));
// 		},
// 	},
// });

// // Profile.hasOne(User, { foreignKey: "belongsTo", targetKey: "username" });
// // Profile.hasMany(Post, { foreignKey: "postId" });

// export default Profile;
