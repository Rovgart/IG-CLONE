import { Sequelize } from 'sequelize';

const db = new Sequelize('ig_clone', 'root', 'test', {
	host: 'localhost',
	dialect: 'mysql',
});

export default db;
