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
  complex:{
    type: String,
    required: true,
  },
  departmentId: {
    type: String,
    required: true,
  },
  supplyRoomDelivery: {
    type: String,
    required: true,
  },
  // warehouseDelivery: {
  //   type: Boolean,
  //   required: true,
  // },
  // icer:{
  //   type: Boolean,
  //   required: true,
  // },
  // flightChecker: {
  //   type: Boolean,
  //   required: true,
  // },
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
