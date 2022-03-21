const { Sequelize, DataTypes } = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dealers_choice_full_stack",
  {
    logging: false,
  }
);

module.exports = { db, DataTypes };
