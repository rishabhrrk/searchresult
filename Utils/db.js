require('dotenv').config();
const { Sequelize } = require("sequelize");

class Database {
  constructor() {
    this.client = new Sequelize(process.env.DATABASE, process.env.DBUSER, process.env.DBPASSWORD, {
      host: process.env.DBHOST,
      dialect: process.env.DBTYPE,
    });
  }

  async connect() {
    try {
      await this.client.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

module.exports = new Database();
