const mongoose = require('mongoose');

const PulseCheckSchema = new mongoose.Schema({
  // date: {
  //   type: Date,
  //   required: true,
  // },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },  
  // department: {
  //   type: String,
  //   required: true,
  // },
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
  // supplyRoomDelivery: { type: Boolean, required: true },
  // warehouseDelivery: { type: Boolean, required: true },
  // icer: { type: Boolean, required: true },
  // flightChecker: { type: Boolean, required: true },
  // qcp: { type: Boolean, required: true },
  // mpIDS: { type: Boolean, required: true },
  // supplyTruck: { type: Boolean, required: true },
  // rampExchange: { type: Boolean, required: true },
  // tempIceTrailer: { type: Boolean, required: true },
  // tempCoolers: { type: Boolean, required: true }
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
