const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/howitworks', (req, res, next) => {
    res.render('howitworks', {
      pageTitle: 'How it works',
      path: '/howitworks',
      isAuthenticated: req.session.isLoggedIn
    });
});

module.exports = router;
