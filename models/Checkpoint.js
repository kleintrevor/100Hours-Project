const mongoose = require('mongoose');

const CheckpointSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  complexTime: {
    actual: { type: Number, required: true },
    target: { type: Number, required: true }
  },
  attendance: {
    actual: { type: Number, required: true },
    target: { type: Number, required: true }
  },
  supplyRoomDelivery: { type: Boolean, required: true },
  warehouseDelivery: { type: Boolean, required: true },
  icer: { type: Boolean, required: true },
  flightChecker: { type: Boolean, required: true },
  qcp: { type: Boolean, required: true },
  mpids: { type: Boolean, required: true },
  trucksInService: {
    actual: { type: Number, required: true },
    target: { type: Number, required: true }
  },
  supplyTruck: { type: Boolean, required: true },
  rampExchange: { type: Boolean, required: true },
  tempIceTrailer: { type: Boolean, required: true },
  tempCoolers: { type: Boolean, required: true }
});

module.exports = mongoose.model('Checkpoint', CheckpointSchema);