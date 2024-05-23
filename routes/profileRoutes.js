const express = require('express');
const router = express.Router();

// Route to render user profile, protected by isLoggedIn middleware
router.get('/userProfile', (req, res) => {
  try {
    res.render('userProfile');
  } catch (error) {
    console.error('Error rendering user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router