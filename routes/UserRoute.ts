export {};
let express = require('express');
let router = express.Router();

router.post('/', (req, res) => {
    res.json({ message: "Account created" })
});

router.get('/', (req, res) => {
    res.json({ user: "admin" })
})

module.exports = router;