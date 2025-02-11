const passport = require('passport');
const validator = require('validator');
const User = require('../models/User');

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/pulseCheck');
  }
  res.render('login', {
    title: 'Login',
  });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: 'Please enter a valid email address.' });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: 'Password cannot be blank.' });

  if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/');
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/');
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/pulseCheck');
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(req, (err) => {
    if (err) {
      console.error('Error logging out:', err);
      return res.status(500).send("Error logging out");
    }

    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).send("Error logging out");
      }

      console.log('User has logged out.');
      res.redirect('/');
        });
      });
    };
exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/pulseCheck');
  }
  res.render('signup', {
    title: 'Create Account',
  });
};

exports.postSignup = async (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: 'Please enter a valid email address.' });
  if (!validator.isLength(req.body.password, { min: 3 }))
    validationErrors.push({
      msg: 'Password must be at least 8 characters long',
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: 'Passwords do not match' });

  if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/');
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  // const department = await Department.findOne({ name: req.body.department });
  //   if (!department) {
  //   const newDepartment = await Department.create({ name: req.body.department });
  //   department = newDepartment;
  //   }

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    department: req.body.department,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    shift: req.body.shift,
  });


  User.findOne(
    { $or: [{ email: req.body.email }, { userName: req.body.userName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash('errors', {
          msg: 'Account with that email address or username already exists.',
        });
        return res.redirect('/');
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect('/pulseCheck');
        });
      });
    }
  );
};

