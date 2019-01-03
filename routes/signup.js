const express = require('express');
const router = express.Router();

const User = require('../models/User');
const KEY = require('../config/keys').Key;

router.post('/', async (req, res) => {
    const newUser = await new User({
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password,
        email: req.body.email
    });
    newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err))
})

module.exports = router