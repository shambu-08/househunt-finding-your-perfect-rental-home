const express = require('express');
const { addProperty, getOwnerProperties } = require('../controllers/ownerController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/add-property', authMiddleware, addProperty);
router.get('/my-properties', authMiddleware, getOwnerProperties);

module.exports = router;
