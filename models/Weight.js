const mongoose = require('mongoose');

const WeightSchema = new mongoose.Schema({
  currentWeight: {
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

module.exports = mongoose.model('Weight', WeightSchema);
