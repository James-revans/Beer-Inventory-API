const mongoose = require('mongoose');
const beerSchema = require('../../models/beer');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    beerSchema.find({}, (err, item) => {
        if(!err) {
            res.status(200).send(item);
        } else {
            res.status(500).send();
        }
    })
}