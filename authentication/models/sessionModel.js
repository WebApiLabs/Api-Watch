const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Session Current set to expire after 5 minutes
const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 15, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);
