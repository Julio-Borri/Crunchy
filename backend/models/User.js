const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  user: {
    type: String,
    require: true,
    unique: true,
  },
  pass: {
    type: String,
    require: true,
  },
});

module.exports = model('User', UserSchema);
