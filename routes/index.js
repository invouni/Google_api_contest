const express = require('express');
const userDataModel = require('../models/userModel')
const router = express.Router();

router.get('/',(req,res) => {
  res.render('index');
})

router.get('/register',(req,res) => {
  res.render('register');
})

router.get('/login',(req,res) => {
  res.render('login');
})

router.post('/register',(req,res) => {
  
})
router.post('/login',(req,res) => {
  
})

module.exports = router;


