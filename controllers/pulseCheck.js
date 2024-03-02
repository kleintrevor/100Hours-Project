const PulseCheck = require('../models/PulseCheck');

module.exports = {
  getPulseChecks: async (req, res) => {
    console.log(req.user);
    try {
      const pulseCheck = await PulseCheck.find({ user: req.user});
      console.log(pulseCheck);
      res.render('pulseCheck.ejs', {
        pulseCheck: pulseCheck,
        user: req.user,
        title : 'Department Pulse Check Entry',
      });
    } catch (err) {
      console.log(err);
    }
  },
  
  createPulseCheck: async (req, res) => {

    try {
      const {
        complexTimeActual, 
        complexTimeTarget,
        attendanceActual, 
        attendanceTarget,
        trucksInServiceActual, 
        trucksInServiceTarget,
        // supplyRoomDelivery,
        // warehouseDelivery,
        // icer,
        // flightChecker,
        // qcp,
        // mpIDS,
        // supplyTruck,
        // rampExchange,
        // tempIceTrailer,
        // tempCoolers
      } = req.body;

    const userID = req.user._id;
    const departmentID = req.user.department;
    const shift = req.user.shift;

       // Create a new data entry object with validated data
    const newPulseCheck = new PulseCheck({
      userID,
      departmentID,
      shift,
      complexTimeActual, 
      complexTimeTarget,
      attendanceActual, 
      attendanceTarget,
      trucksInServiceActual, 
      trucksInServiceTarget,
      // supplyRoomDelivery,
      // warehouseDelivery,
      // icer,
      // flightChecker,
      // qcp,
      // mpIDS,
      // supplyTruck,
      // rampExchange,
      // tempIceTrailer,
      // tempCoolers
    });
     
      await newPulseCheck.save();
      console.log('Pulse check has been entered!');
      res.redirect('/pulseCheck');
    } catch (err) {
      console.log(err);
    }
  },

  markComplete: async (req, res) => {
    try {
      await PulseCheck.findOneAndUpdate(
        { _id: req.body.pulseCheckIdFromJSFile },
        {
          completed: true,
        }
      );
      console.log('Marked Complete');
      res.json('Marked Complete');
    } catch (err) {
      console.log(err);
    }
  },

  markIncomplete: async (req, res) => {
    try {
      await PulseCheck.findOneAndUpdate(
        { _id: req.body.pulseCheckIdFromJSFile },
        {
          completed: false,
        }
      );
      console.log('Marked Incomplete');
      res.json('Marked Incomplete');
    } catch (err) {
      console.log(err);
    }
  },

  deletePulseCheck: async (req, res) => {
    console.log(req.body.pulseCheckIdFromJSFile);
    try {
      await PulseCheck.findOneAndDelete({ _id: req.body.pulseCheckIdFromJSFile });
      console.log('Deleted entry');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};
