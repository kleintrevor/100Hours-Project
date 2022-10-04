const PulseCheck = require('../models/PulseCheck');
var moment = require('moment');

module.exports = {
  getFeed: async (req, res) => {
    console.log(req.user);
    try {
      const feedItems = await PulseCheck.find({         
        userId: req.user.id,

      });
      console.log(`these are the feed items ${feedItems}`);
      res.render('feed.ejs', {
        feedItems: feedItems, 
        moment: moment,
        title : 'Department Pulse Check Entry',
        userId: req.user.id,
        departmentId: req.user.department,
        date: req.body.date,
        targetStaffingLevels: req.body.targetStaffingLevels,
        currentStaffingLevels: req.body.currentStaffingLevels,
        complexTime: req.body.complexTime,
        complexNumber: req.body.complexNumber,
        trucksTarget: req.body.trucksTarget,
        trucksInService: req.body.trucksInService,
        supplyRoomDelivery: req.body.supplyRoomDelivery,
        warehouseDelivery: req.body.warehouseDelivery,
        icer: req.body.icer,
        flightChecker: req.body.flightChecker,
        qcp: req.body.qcp,
        mpIds: req.body.mpIds,
        supplyTruck: req.body.supplyTruck,
        rampExchangeTruck: req.body.rampExchangeTruck,
        tempIceTrailer: req.body.tempIceTrailer,
        tempCoolers: req.body.tempCoolers, 
      });
    } catch (err) {
      console.log(err);
    }
  }
}