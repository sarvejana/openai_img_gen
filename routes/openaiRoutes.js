const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

module.exports = router;

//post event only
router.post('/generateimage',generateImage);

