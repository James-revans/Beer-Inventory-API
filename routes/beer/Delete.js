const mongoose = require('mongoose');
const beerSchema = require('../../models/beer');
var Schema = mongoose.Schema;

module.exports = (req, res) => {
    beerSchema.findById(req.body._id, (err, item) => {
        if(!err && item) {
            item.remove((err) => {
                if(!err) {
                    res.send({_id:req.body._id});
                } else {
                    console.log(err);
                    res.status(500).send();
                }
            });
        } else {
            console.log(err);
            res.status(500).send();
        }
    })
}