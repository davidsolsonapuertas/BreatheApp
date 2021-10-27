const mongoose = require('./index');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  firstName: String,
  username: String,
  email: String,
  password: String,
  createdAt: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
