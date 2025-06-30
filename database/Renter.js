const mongoose = require('mongoose');

const renterSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'renter' },
});

module.exports = mongoose.model('Renter', renterSchema);
