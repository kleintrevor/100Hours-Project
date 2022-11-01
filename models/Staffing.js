const mongoose = require('mongoose');

const StaffingSchema = new mongoose.Schema({
    targetStaffingLevels: {
        type: Number,
        required: false,
    },
    currentStaffingLevels: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model('Staffing', StaffingSchema);
