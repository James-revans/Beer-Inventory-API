const mongoose = require('mongoose');
const UserModel = require('../../models/user');
const Schema = mongoose.Schema;


module.exports = async(req, res, next) => {
    // res.status(201).send(req.body);
    //create a new user
    let newUser = UserModel({
        email: req.body.name,
        password: req.body.password
    });
    //save the new user
    newUser.save((err, user) => {
        if(!err) {
            res.status(201).send(user);
        } else {
            console.log(err);
            res.status(500).send();
        }
    });
}