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
const AuthRoute = require("./routes/AuthRoute.ts");
const UserRoute = require("./routes/UserRoute.ts");

app.use("/api/auth", AuthRoute);
app.use("/api/users", UserRoute);

app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});
