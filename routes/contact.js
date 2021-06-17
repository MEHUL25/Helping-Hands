const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact', (req, res, next) => {
  
  res.render('contact', {
      pageTitle: 'Contact Us',
      path: '/contact',
      isAuthenticated: req.session.isLoggedIn
    });
});

module.exports = router;
