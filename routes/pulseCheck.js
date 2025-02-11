const express = require('express');
const router = express.Router();
const pulseCheckController = require('../controllers/pulseCheck');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, pulseCheckController.getPulseChecks);

router.post('/createPulseCheck', pulseCheckController.createPulseCheck);

router.put('/markComplete', pulseCheckController.markComplete);

router.put('/markIncomplete', pulseCheckController.markIncomplete);

router.delete('/deletePulseCheck', pulseCheckController.deletePulseCheck);


module.exports = router;
