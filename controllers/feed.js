const PulseCheck = require('../models/PulseCheck');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await PulseCheck.find({ userId: req.user.id});
      console.log(`these are the feed items ${feedItems}`);
      res.render('feed.ejs', {
        feedItems: feedItems, 
        moment: moment,
        title : 'Department Pulse Check Entry',
        currentpulseCheck: req.body.pulseCheckItem,
        userId: req.user.id,
        date: req.body.date,
        complexTime: req.body.complexTime,
        complexNumber: req.body.complexNumber,
        trucksInService: req.body.trucksInService,
        supplyRoomDelivery: req.body.supplyRoomDelivery,
        warehouseDelivery: req.body.warehouseDelivery,
        icer: req.body.icer,
        flightChecker: req.body.flightChecker,
        departmentId: req.user.department,
       })
    } catch (err) {
      console.log(err);
    }
  }
}

    // const feedItems = await db.collection('pulsechecks').find().toArray();
    // const incompleteCheckPoint = await db.collection('pulsechecks').countDocuments({completed: false})
    // response.render('feed.ejs', {modFeed: feedItems, incomplete: incompleteCheckPoint  })
