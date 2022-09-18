module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  // between the req and response to check if the user is authoized (from controllers auth.js)
  // 