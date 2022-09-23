var moment = require('moment');

module.exports = {
  getFeed: (req, res) => {
    res.render('feed.ejs', {
      title: "Live Feed - MoD Pulse Check",
      moment: moment,
    });
  },
};
