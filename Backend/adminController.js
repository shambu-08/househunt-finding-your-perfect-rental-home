const User = require('../schemas/userModel');
const Property = require('../schemas/propertyModel');
const Booking = require('../schemas/bookingModel');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};

exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};
