const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();

const User = require('../models/User');
const KEY = require('../config/keys').Key

router.post('/', async (req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({username, password}).lean().exec();
    if(user) {
        const { _id: id, username, fullname } = user;
        res.json({
            access_token: jwt.sign({id, username, fullname}, KEY)
        })
    } else {
        res.json({ code: 1, message: 'Wrong credentials' });
    }
});

module.exports = router