const FeedItem = require('../models/FeedItem');
const PulseCheck = require('../models/PulseCheck');
const User = require('../models/User');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await FeedItem.find()
      .populate('userId') // Populate user data
      .populate('pulseCheck'); // Populate pulse check data

      console.log(`these are the feed items ${feedItems}`);

      // Render the feed.ejs template with the retrieved entries
      res.render('feed', { locals: { title: 'Department Pulse Check Live Feed', feedItems } });
      } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving feed data");
      }
    },
};

