const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  fullname: { type: String},
  email: { type: String },
  password: { type: String },
});

module.exports = User = mongoose.model('User', userSchema);
