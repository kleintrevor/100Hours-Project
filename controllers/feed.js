const FeedItem = require('../models/FeedItem');
const PulseCheck = require('../models/PulseCheck');
const User = require('../models/User');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await FeedItem.find()
      .populate('user') // Populate user data
      .populate('pulseCheck'); // Populate pulse check data

      // // Populate user information within each feed item
      // for (const feedItem of feedItems) {
      //   try {
      //     const user = await User.findById(feedItem.user); // Assuming 'user' is a mongoose ObjectId
      //     feedItem.user = user;
      //   } catch (err) {
      //     console.error("Error retrieving user for feed item:", err);
      //     // Handle missing user gracefully (e.g., log a warning or set a default value)
      //     feedItem.user = null; // Example: Set to null if user not found
      //   }
      // }

      console.log(`these are the feed items ${feedItems}`);

      // Render the feed.ejs template with the retrieved entries
      res.render('feed', { locals: { title: 'Department Pulse Check Entry', feedItems } });
      } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving feed data");
      }
    },

    createFeedItem: async (req, res) => {
      try {
        const userId = req.user._id; // Retrieve user ID 
        const { 
          pulseCheckData, 
          department, 
          shift } = req.body;
    
        const newPulseCheck = new PulseCheck(pulseCheckData);
        await newPulseCheck.save();
    
        const newFeedItem = new FeedItem({
          user: userId,
          pulseCheck: newPulseCheck._id,
          department,
          shift
        });
    
        await newFeedItem.save();
    
        res.status(201).json({ message: 'Feed item created successfully' });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating feed item' });
      }
    },
};

