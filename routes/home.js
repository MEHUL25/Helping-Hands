const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
 
  res.render('home', {
      pageTitle: 'Home',
      path: '/',
      modal:0,
      isAuthenticated: req.session.isLoggedIn
    });
});

module.exports = router;
