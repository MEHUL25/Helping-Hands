const Post = require("../models/post.js");



exports.searchAllshares = (req, res, next) => {

      const search = req.body.search;
      const choice = req.body.choice;
      let singleEntry=false;
      
      if (choice === "id") {
            Post.find({postId:search})
            .then(post => {
                  if(!post)
                  {
                        return res.redirect('/');
                  }
                  else
                  {
                        res.render('watchlist', {
                              postsArray: post,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  }
            
            });
      }
      else if (choice === "available")
      {
            Post.find({status:"available"})
            .then(post => {
                  if(!post)
                  {
                        return res.redirect('/');
                  }
                  else
                  {
                        res.render('watchlist', {
                              postsArray: post,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  }
            
            });
      }
      else if (choice === "consumable")
      {
            Post.find({type:"Consumable"})
            .then(post => {
                  if(!post)
                  {
                        return res.redirect('/');
                  }
                  else
                  {
                        res.render('watchlist', {
                              postsArray: post,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  }
            
            });
      }
      else if (choice === "nonconsumable")
      {
            Post.find({type:"Non Consumable"})
            .then(post => {
                  if(!post)
                  {
                        return res.redirect('/');
                  }
                  else
                  {
                        res.render('watchlist', {
                              postsArray: post,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  }
            
            });
      }
      else if (choice === "city")
      {
            Post.find({city:"search"})
            .then(post => {
                  if(!post)
                  {
                        return res.redirect('/');
                  }
                  else
                  {
                        res.render('watchlist', {
                              postsArray: post,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  }
            
            });
      }
      else {
            Post.find()
                  .then(posts => {
                        res.render('watchlist', {
                              postsArray: posts,
                              pageTitle: 'WatchList',
                              path: '/watchlist',
                              hasProducts: post.length > 0,
                              isAuthenticated: req.session.isLoggedIn
                        });
                  })
                  .catch(err => {
                        console.log(err);
                  });

      }


};