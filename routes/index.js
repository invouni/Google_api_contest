const express = require('express');
const router = express.Router();


// Route to render the home page
router.get('/', (req, res) => {
  try{
    res.render('index');
  }catch(e) {
    console.log(e);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
