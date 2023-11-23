import express from "express";
import bodyParser from "body-parser";
import db from "./config/dbConfig.js";

///wtf mappings suckj duck
//import Profile from "./models/profileModel.js";

// import User from "./models/userModel.js";
// import Follow from "./models/followsModel.js";
//
/// idea kiedy bedzie profil to bedziesz mogl dac go do getuserfollowin i followers zmapowac same nazyu uzytkownikow i wpierdolic w finallProfile where usernames =
// usernama z followerow i ez masz zrobiony buffer moze nie wiem

import Like from "./models/likeModel.js";
import { Follow, User, Post } from "./models/mapping.js";

import userRoutes from "./routes/userRouters.js";
import postRouters from "./routes/postRouters.js";
import logRouters from "./routes/logRouters.js";
import followRouters from "./routes/followRouters.js";

import cors from "cors";

const app = express();

// todo cors logic
app.use(cors());

app.use(bodyParser.json());

app.use("/api", logRouters);
app.use("/api", userRoutes);
app.use("/api", postRouters);
app.use("/api", followRouters);

const PORT = process.env.PORT || 3000;

db.authenticate()
	.then(() => {
		console.log("Connected to db!");
	})
	.catch((e) => {
		console.error(e);
	});

db.sync({ force: false })
	.then(async () => {
		await Promise.all([Follow.sync(), Post.sync(), User.sync(), Like.sync()]);
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Database sync error:", error);
	});
