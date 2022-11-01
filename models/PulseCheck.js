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
  
  complexTime:{
    type: String,
    required: false,
  },
  complexNumber:{
    type: String,
    required: false,
  },
  trucksTarget: {
    type: Number,
    required: false,
  },
  trucksInService: {
    type: Number,
    required: false,
  },
  supplyRoomDelivery: {
    type: Boolean, 
    required: false,
  },
  warehouseDelivery: {
    type: Boolean, 
    required: false,

  },
  icer:{
    type: Boolean, 
    required: false,

  },
  flightChecker: {
    type: Boolean, 
    required: false, 
  },
  qcp: {
    type: Boolean, 
    required: false,
  },
  mpIds: {
    type: Boolean, 
    required: false,
  },
  supplyTruck: {
    type: Boolean, 
    required: false,
  },
  rampExchangeTruck: {
    type: Boolean, 
    required: false,
  },
  tempIceTrailer: {
    type: Boolean, 
    required: false,
  },
  tempCoolers: {
    type: Boolean, 
    required: false,
  },
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
