const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

// 'users' can be considered the name of the schema
mongoose.model('users', userSchema);
