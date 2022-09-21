const mongoose = require('mongoose');

const PulseCheckSchema = new mongoose.Schema({
  currentpulseCheck: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
