const  Sequelize  = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    dialect: "mysql",
    host: 'localhost',
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'Sprint10_DB'
});

module.exports = db;