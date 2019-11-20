// grab the things we need
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// create a schema
const UserSchema= new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
	
});



UserSchema.pre('save', async function(next) {
    const user = this;

    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;

    next();
})

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
}

// the schema is useless so far
// we need to create a model using it
const UserModel = mongoose.model('user', UserSchema);

// make this available to our users in our Node applications
module.exports = UserModel;