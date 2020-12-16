const router = require('express').Router();

router.post('register', (req, res) => {
    const { name, email, password } = req.params;
    if(!name || !email || !password) res.status(400).json({ message: "Missing parameters" });

    res.json({ message: "Account created" })
})

module.exports = router;