const PulseCheck = require('../models/PulseCheck');

module.exports = {
  getPulseChecks: async (req, res) => {
    console.log(req.user);
    try {
      const pulseCheck = await PulseCheck.find({ userId: req.user.id});
      console.log(pulseCheck);
      res.render('./pulseCheck.ejs', {
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
      await PulseCheck.create({
        currentpulseCheck: req.body.pulseCheckItem,
        userId: req.user.id,
        date: req.body.date,
        complexTime: req.body.complexTime,
        complexNumber: req.body.complexNumber,
        trucksinservice: req.body.trucksinservice,
        supplyRoomDelivery: req.body.supplyRoomDelivery,
        warehouseDelivery: req.body.warehouseDelivery,
        icer: req.body.icer,
        flightChecker: req.body.flightChecker,
        departmentId: req.user.department,
      });
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
