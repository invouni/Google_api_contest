const express = require('express');
const router = express.Router();
const userDataModel = require('../models/userModel');
const bcrypt = require('bcrypt');

// Route to render the home page
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
