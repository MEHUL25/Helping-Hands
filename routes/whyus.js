const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/whyus', (req, res, next) => {
    res.render('whyus', {
      pageTitle: 'Why Us',
      path: '/whyus',
      isAuthenticated: req.session.isLoggedIn
    });
});

module.exports = router;
