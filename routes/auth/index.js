const express = require('express');
const router = express.Router();
// const create = require('./Create');
const login = require('./Login');
const read = require('./Read');

const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {res.send('Forbidden')});
router.put('/signup' , passport.authenticate('signup', { session : false }), async (req, res, next) => { 
    res.json({ 
        passport,
        message : 'Signup successful',
        user : req.user 
    })
});

// JWT signing is doen in the Login.js route file
router.post('/login' , login);

module.exports = router;