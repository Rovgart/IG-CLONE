import { DataTypes, Model, Sequelize } from 'sequelize';
import db from '../config/dbConfig.js';

const Like = db.define(
	'like',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		postId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			unique: 'user_post_unique',
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: false,
		},
	},
	{
		indexes: [
			{
				unique: true,
				fields: ['userId', 'postId'],
				name: 'user_post_unique',
			},
		],
	}
);

export default Like;
