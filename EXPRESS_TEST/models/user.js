const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
});
// set credentials

module.exports = mongoose.model('user', userSchema, 'users');