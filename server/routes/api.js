const express = require('express');
const router = express.Router();
const Contact = require('../database/models/Contact')
const User = require('../database/models/User')

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { next(); }
  else {
    res.status(401).json({ success: false, error: 'not authenticated' });
  }
}



module.exports = router;