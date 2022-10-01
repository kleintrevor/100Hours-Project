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
  targetStaffingLevels: {
    type: Number,
    required: false,
  },
  currentStaffingLevels: {
    type: Number,
    required: false,
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

  // Below are the checkboxes.  I still need to get these to return properly. 
  // It looks like i'll need some basic code to validate that the check box is checked or unchecked otherwise it always returns true

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
});

module.exports = mongoose.model('PulseCheck', PulseCheckSchema);
