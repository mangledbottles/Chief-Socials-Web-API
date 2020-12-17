var express = require("express");
var router = express.Router();
var Auth = require("../controllers/AuthController");
router.post("/register", function (req, res) {
    // console.log(req.body);
    Auth.createUser(req.body)
        .then(function (user) {
        //   console.log(req);
        res.json(user);
    })["catch"](function (err) {
        //   console.log(req);
        res.status(err.status || 500).json(err);
    });
});
module.exports = router;
