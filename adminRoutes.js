const express = require('express');
const { getAllUsers, getAllProperties, getAllBookings } = require('../controllers/adminController');
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/properties', getAllProperties);
router.get('/bookings', getAllBookings);

module.exports = router;
