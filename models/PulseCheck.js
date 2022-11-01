const mongoose = require('mongoose');

const PulseCheckSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },  
  departmentId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
