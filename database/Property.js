const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner' },
  title: String,
  location: String,
  price: Number,
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Property', propertySchema);
