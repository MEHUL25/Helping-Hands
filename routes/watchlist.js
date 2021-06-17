const path = require('path');

const express = require('express');

const postsController = require('../controllers/posts');
const searchController = require('../controllers/search');

const userData = require('./user');

const router = express.Router();

router.get('/watchlist',postsController.getPosts );

router.post('/Watchlist',searchController.searchAllshares);

module.exports = router;
