const PulseCheck = require('../models/PulseCheck');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await PulseCheck.find({});
      console.log(`these are the feed items ${feedItems}`);
      res.render('feed.ejs', {
        feedItems: feedItems, 
        moment: moment,
        title : 'Department Pulse Check Entry',

      });
    } catch (err) {
      console.log(err);
    }
  }
}

