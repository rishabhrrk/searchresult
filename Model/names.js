const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../Utils/db");

const Names = db.client.define("names", {
  name: DataTypes.TEXT,
  year: DataTypes.INTEGER,
  gender: DataTypes.TEXT,
  count: DataTypes.INTEGER
},{
    timestamps: false
});

module.exports = Names;
