const PulseCheck = require('../models/PulseCheck');

module.exports = {
  getPulseChecks: async (req, res) => {
    console.log(req.user);
    try {
      const pulseCheck = await PulseCheck.find({ userId: req.user.id });
      console.log(pulseCheck);
      res.render('pulseCheck.ejs', {
        pulseCheck: pulseCheck,
        user: req.user,
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
      });
      console.log('Weight has been tracked!');
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
      console.log('Deleted weight');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};
