const express = require('express');
const router = express.Router();
const weightsController = require('../controllers/weights');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, weightsController.getWeights);

router.post('/createWeight', weightsController.createWeight);

router.put('/markComplete', weightsController.markComplete);

router.put('/markIncomplete', weightsController.markIncomplete);

router.delete('/deleteWeight', weightsController.deleteWeight);

module.exports = router;
