const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Renter' },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  dateBooked: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
