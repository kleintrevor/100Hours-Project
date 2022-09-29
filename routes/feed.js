const express = require('express');
const router = express.Router();
const feedController = require('../controllers/feed');
const { ensureAuth } = require('../middleware/auth');





router.get('/feed', ensureAuth, feedController.getFeed);




module.exports = router;
