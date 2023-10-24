const { DataTypes } = require("sequelize");
const db = require("../config/db.js");

const Product = db.define("product", {
    id: {
        type: DataTypes.UUIDV1,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING
    }
},{
    tableName: 'product'
});

module.exports = Product;
