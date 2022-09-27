var moment = require('moment');

module.exports = {
  getFeed: (req, res) => {
    res.render('./pages/feed.ejs', {
      title: "Live Feed - MoD Pulse Check",
      moment: moment,
    });
  },
};
