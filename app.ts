var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(logger("dev"));
app.use(express.json());

/** All routes */
const AuthRoute = require("./routes/AuthRoute");
const UserRoute = require("./routes/UserRoute");

app.all("/api", (req, res) => {
  res.json({ message: " /api CHIEF SOCIALS API" });
});
app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

app.use((err, req, res, next) => {
  res.status(404).json({ message: "Chief Socials API", endpoint: "NOT_FOUND" });
});

app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});
