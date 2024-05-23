const express = require('express');
const router = express.Router();
const userDataModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

// Route to render registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Route to render login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Route to render user profile, protected by isLoggedIn middleware
router.get('/userProfile', isLoggedIn, (req, res) => {
  res.render('userProfile');
});

// Route to handle registration
router.post('/register', async (req, res) => {
  try {
    let pass = await bcrypt.hash(req.body.password, 10);
    const user = new userDataModel({
      email: req.body.email,
      password: pass
    });

    await user.save();
    console.log(user)
    res.redirect("/auth/login");
  } catch (error) {
    console.error(error);
    res.redirect('/auth/register');
  }
  
});

// Route to handle login
router.post('/login', passport.authenticate('local', { 
  failureRedirect: '/auth/login', 
  successRedirect: '/auth/userProfile' 
}));

// Middleware to check if the user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/auth/login');
  }
}

module.exports = router;
