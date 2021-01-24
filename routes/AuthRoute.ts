var express = require("express");
var router = express.Router();

const Auth = require("../controllers/AuthController");

router.post("/register", (req, res) => {
  // console.log(req.body);
  Auth.createUser(req.body)
    .then((user) => {
      //   console.log(req);
      res.json(user);
    })
    .catch((err) => {
      //   console.log(req);
      res.status(err.status || 500).json(err);
    });
});

router.get("/vars", (req, res) => {
  res.json({ isProd: process.env.NODE_ENV === "production" });
});

module.exports = router;
