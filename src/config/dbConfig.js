import { Sequelize } from "sequelize";

const db = new Sequelize("ig_clone", "postgres", "test", {
	host: "localhost",
	dialect: "postgres",
	operatorsAliases: false,
});

export default db;
