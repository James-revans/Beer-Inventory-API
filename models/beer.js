// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
var beerSchema = new Schema({
    name: String,
    type: String,
    quantity: Number
});

// the schema is useless so far
// we need to create a model using it
let beer = mongoose.model('beer', beerSchema);

// make this available to our users in our Node applications
module.exports = beer;