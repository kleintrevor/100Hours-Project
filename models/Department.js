const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensure department names are unique
  },
  shift: {
    type: String,
    required: true,
    enum: ['AM', 'PM'], // Restrict values to 'AM' or 'PM'
  },
 });

module.exports = mongoose.model('Department', departmentSchema);