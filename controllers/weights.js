const Weight = require('../models/Weight');

module.exports = {
  getWeights: async (req, res) => {
    console.log(req.user);
    try {
      const weights = await Weight.find({ userId: req.user.id });
      console.log(weights);
      res.render('weights.ejs', {
        weights: weights,
        user: req.user,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createWeight: async (req, res) => {
    try {
      await Weight.create({
        currentWeight: req.body.weightItem,
        userId: req.user.id,
        date: req.body.date,
      });
      console.log('Weight has been tracked!');
      res.redirect('/weights');
    } catch (err) {
      console.log(err);
    }
  },
  markComplete: async (req, res) => {
    try {
      await Weight.findOneAndUpdate(
        { _id: req.body.weightIdFromJSFile },
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
      await Weight.findOneAndUpdate(
        { _id: req.body.weightIdFromJSFile },
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
  deleteWeight: async (req, res) => {
    console.log(req.body.weightIdFromJSFile);
    try {
      await Weight.findOneAndDelete({ _id: req.body.weightIdFromJSFile });
      console.log('Deleted weight');
      res.json('Deleted It');
    } catch (err) {
      console.log(err);
    }
  },
};
