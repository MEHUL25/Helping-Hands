const path = require('path');

const express = require('express');

const loginController = require('../controllers/auth');

const router = express.Router();

router.post('/add-user', loginController.postAddUser );

router.post('/logout', loginController.postLogout );

router.post('/log', loginController.postLogin );

router.get('/', (req, res, next) => {
  
  res.render('account', {
      pageTitle: 'Login',
      path: '/login',
      isAuthenticated:false
    });
});

module.exports = router;
