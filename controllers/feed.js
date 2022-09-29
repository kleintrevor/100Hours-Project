const PulseCheck = require('../models/PulseCheck');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await PulseCheck.find({ userId: req.user.id});
      console.log(feedItems);
      res.render('feed.ejs', {
        modFeed: feedItems, 
        moment: moment,
        title : 'Department Pulse Check Entry',
        trucksInService: req.body.trucksInService,
        complexTime: req.body.complexTime, })
    } catch (err) {
      console.log(err);
    }
  }
}

    // const feedItems = await db.collection('pulsechecks').find().toArray();
    // const incompleteCheckPoint = await db.collection('pulsechecks').countDocuments({completed: false})
    // response.render('feed.ejs', {modFeed: feedItems, incomplete: incompleteCheckPoint  })
