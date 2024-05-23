const express = require('express');
const router = express.Router();
const userDataModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');

// Route to render registration form
router.get('/register', (req, res) => {
  try {
    res.render('register');
  } catch (error) {
    console.error('Error rendering registration form:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to render login form
router.get('/login', (req, res) => {
  try {
    res.render('login');
  } catch (error) {
    console.error('Error rendering login form:', error);
    res.status(500).send('Internal Server Error');
  }
});



// Route to handle registration
router.post('/register', async (req, res) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new userDataModel({
      email: req.body.email,
      password: hashedPassword
    });

    await user.save();
    console.log('New user registered:', user);
    res.redirect('/auth/login');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to handle login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error('Error during login:', err);
      return next(err);
    }
    if (!user) {
      console.log('Login failed:', info.message);
      return res.redirect('/auth/login');
    }
    req.logIn(user, (err) => {
      if (err) {
        console.error('Error logging in user:', err);
        return next(err);
      }
      return res.redirect('/user/userProfile');
    });
  })(req, res, next);
});



module.exports = router;
