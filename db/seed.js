const { db } = require("./db");
const User = require("./models/users");

const seed = async () => {
  try {
    await db.sync({ force: true });
    User.create({ name: "Eric" });
    User.create({ name: "Miles" });
    User.create({ name: "TinaMarie" });
    User.create({ name: "Alicia" });
    User.create({ name: "Dariusz" });
    User.create({ name: "Lammy" });
    User.create({ name: "Pillow" });
    User.create({ name: "Dinosaur" });
    User.create({ name: "Flamingo" });
    console.log("seed");
  } catch (error) {
    console.log(error);
  }
  console.log("seeded");
};

module.exports = seed;
