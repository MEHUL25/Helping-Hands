const path = require('path');

const express = require('express');

const postsController = require('../controllers/posts');
const isAuth = require('../middleware/isauth');

const router = express.Router();

// /admin/add-post => GET
router.get('/add-post',isAuth,postsController.getAddPost );

// /admin/add-product => POST
router.post('/add-post', isAuth,postsController.postAddPost);


router.post('/edit',isAuth,postsController.getEditPost);


router.get('/edit-post',isAuth,(req,res,next)=>{
      res.render('edit-post',{
            path:'/user',
            isAuthenticated: req.session.isLoggedIn
      });
});

router.post('/edit-post',isAuth,postsController.postEditPost);


router.post('/delete',isAuth,postsController.postDeletePost);

module.exports = router;
