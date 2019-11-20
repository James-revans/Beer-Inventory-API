const mongoose = require('mongoose');
const UserModel = require('../../models/user');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    UserModel.find({}, (err, item) => {
        if(!err) {
            res.status(200).send(item);
        } else {
            res.status(500).send();
        }
    })
}