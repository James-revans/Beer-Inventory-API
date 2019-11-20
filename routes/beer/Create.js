const mongoose = require('mongoose');
const userSchema = require('../../models/beer');
const Schema = mongoose.Schema;


module.exports = (req, res) => {
    // res.status(201).send(req.body);
    //create a new todo
    let newBeer = userSchema({
        name: req.body.name,
        type: req.body.type,
        quantity: req.body.quantity
    });
    //save the new task
    newBeer.save((err, beer) => {
        if(!err) {
            res.status(201).send(beer);
        } else {
            console.log(err);
            res.status(500).send();
        }
    });
}