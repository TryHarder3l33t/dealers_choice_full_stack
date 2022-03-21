const { db, DataTypes } = require("../db");

const User = db.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: function (user) {
        console.log(user.name);
      },
    },
  }
);

module.exports = User;
