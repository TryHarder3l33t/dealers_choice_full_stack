const User = require("../db/models/users");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const response = await User.findByPk(req.body.data.id);
    if (response === null) {
    } else {
      res.json(response);
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/", async (req, res) => {
  try {
    const update = await User.findByPk(req.body.id);
    update.set({
      name: req.body.name,
    });
    const updated = await update.save();
    res.json(updated);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
