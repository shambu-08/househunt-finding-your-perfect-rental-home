const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'owner' },
});

module.exports = mongoose.model('Owner', ownerSchema);
