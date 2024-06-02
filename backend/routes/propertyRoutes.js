const express = require('express');
const { addProperty, verifyProperty, tokenizeProperty } = require('../controllers/propertyController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', auth, addProperty);
router.post('/verify', auth, verifyProperty);
router.post('/tokenize', auth, tokenizeProperty);

module.exports = router;
