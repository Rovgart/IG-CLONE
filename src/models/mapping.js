import User from "./userModel.js";
import Follow from "./followsModel.js";
import Post from "./postModel.js";

Follow.belongsTo(User, { as: "Follower", foreignKey: "followerUsername", targetKey: "username" });
Follow.belongsTo(User, { as: "Following", foreignKey: "followingUsername", targetKey: "username" });

User.hasMany(Follow, { as: "Followers", foreignKey: "followingUsername", sourceKey: "username" });
User.hasMany(Follow, { as: "Following", foreignKey: "followingUsername", sourceKey: "username" });

Post.belongsTo(User, { foreignKey: "createdBy", targetKey: "username" });

export { User, Follow, Post };
