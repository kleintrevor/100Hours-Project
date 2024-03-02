const mongoose = require('mongoose');

const FeedItemSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  pulseCheck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PulseCheck',
    required: true
  },
  department: { 
    type: String, 
    required: true 
  },
  shift: { 
    type: String, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  complexTimeActual: { 
    type: String, 
    required: true 
  },
  complexTimeTarget: { 
    type: String, 
    required: true 
  },
  attendanceActual: { type: Number, required: true },
  attendanceTarget: { type: Number, required: true },
  trucksInServiceActual: { type: Number, required: true },
  trucksInServiceTarget: { type: Number, required: true },
  // Additional properties specific to feed display 
  // ...
});

module.exports = mongoose.model('FeedItem', FeedItemSchema);