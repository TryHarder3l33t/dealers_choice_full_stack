const seed = require("./db/seed");
const express = require("express");
const app = express();
const port = process.env.PORT || 3210;
const path = require("path");

app.listen(port, () => {
  //Log the time in color
  console.log(`"\u001b[1;42m" ${Date().toString()} "\u001b[0m"`);
  console.log(`Express is running on port ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.use("/dist", express.static(path.join(__dirname, "dist")));

// //app.use("/api/users", require("./api/user"));
// app.use("/api/detail", require("./api/detail"));
app.use("/api", require("./api"));

seed();
