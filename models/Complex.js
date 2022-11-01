const mongoose = require('mongoose');

const ComplexSchema = new mongoose.Schema({
    complexTime:{
        type: String,
        required: false,
      },
      complexNumber:{
        type: String,
        required: false,
      },
});

module.exports = mongoose.model('Complex', ComplexSchema);