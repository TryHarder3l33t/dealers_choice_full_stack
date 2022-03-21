const router = require("express").Router();
router.use("/users", require("./user.js"));
router.use("/detail", require("./detail.js"));

module.exports = router;
