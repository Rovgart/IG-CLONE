import express from "express";
import bodyParser from "body-parser";
import db from "./config/dbConfig.js";
import User from "./models/userModel.js";
import Post from "./models/postModel.js";
import Like from "./models/likeModel.js";
import userRoutes from "./routes/userRouters.js";
import postRouters from "./routes/postRouters.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api", userRoutes);
app.use("/api", postRouters);

const PORT = process.env.PORT || 3000;

db.authenticate()
	.then(() => {
		console.log("Connected to db!");
	})
	.catch((e) => {
		console.error(e);
	});

db.sync()
	.then(async () => {
		await Promise.all([User.sync(), Post.sync(), Like.sync()]);
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Database sync error:", error);
	});
