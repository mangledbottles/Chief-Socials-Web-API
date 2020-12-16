export {};
let express = require("express");
let router = express.Router();

const Auth = require("../controllers/AuthController.ts");

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

module.exports = router;
