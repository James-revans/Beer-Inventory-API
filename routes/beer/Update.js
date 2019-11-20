//error codes: 1000 = user not found
const mongoose = require('mongoose');
const beerSchema = require('../../models/beer');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    beerSchema.findById(req.body._id, (err, item) => {
        if(!err) {
            item.quantity = req.body.quantity
            item.save((err) => {
                if(!err) {
                    res.send(item);
                } else {
                    console.log(err);
                    res.status(500).send();
                }
            });
        } else {
            if(err) {
                console.log(err);
                res.status(500).send();
            };
        };
    });
}