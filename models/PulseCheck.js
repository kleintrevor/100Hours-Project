const mongoose = require('mongoose');

const PulseCheckSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },  
  departmentID: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
    //enum: ['AM', 'PM']
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
  supplyRoomDelivery: { completed: false },
  warehouseDelivery: { completed: false },
  supplyRoomDelivery: { completed: false },
  warehouseDelivery: { completed: false },
  icer: { completed: false },
  flightChecker: { completed: false },
  qcp: { completed: false },
  mpIDS: { completed: false },
  supplyTruck: { completed: false },
  rampExchange: { completed: false },
  tempIceTrailer: { completed: false },
  tempCoolers: { completed: false }
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
