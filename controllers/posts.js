const Post = require('../models/post');

exports.getAddPost = (req, res, next) => {
  
  res.render('add-post', {
        pageTitle: 'Add Post',
        path: '/user/add-post',
        isAuthenticated: req.session.isLoggedIn
      });
};

exports.postAddPost = (req, res, next) => {

    
    const city = req.body.city;
    const name = req.body.name;
    const contact = req.body.contact;
    const address = req.body.address;
    const type = req.body.type;
    const description = req.body.description;
    const author = req.session.user.username;
    const tdate = req.body.tdate;
    const status = req.body.status;

    const iid = req.session.user.username+Math.floor((Math.random() * 100) + 1).toString();;

    const post= new Post({postId:iid,city:city,
      name:name,contact:contact,address:address,
      type:type,description:description,
      author:author,tdate:tdate,status:status});
      post
      .save()
      .then(result => {
          res.render('home', {
            pageTitle: 'Home',modal:1,
            isAuthenticated: req.session.isLoggedIn
          });
      })
      .catch(err=>{
          console.log(err);
      });
    };

exports.getPosts = (req, res, next) => {
  Post.find()
  .then( posts => {
    res.render('watchlist', {
      postsArray: posts,
      pageTitle: 'WatchList',
      path: '/watchlist',
      hasProducts: posts.length > 0,
      isAuthenticated: req.session.isLoggedIn
    });

  });

};


exports.getEditPost = (req, res, next) => {

  const test = req.body.title;
  Post.find({postId:test})
    .then(post => {
      if(!post)
      {
          return res.redirect('/');
      }
      else
      {
            res.render('edit-post', {
              pageTitle: 'Edit Post',
              path: '/user/editPost',
              post:post,
              isAuthenticated: req.session.isLoggedIn
            });
      }
    
  });
};

exports.postDeletePost = (req, res, next) => {

  const test = req.body.title;

  Post.deleteOne({ postId: test })
  .then(result =>
    {
        res.render('home', {
          pageTitle: 'Home',modal:2,
          isAuthenticated: req.session.isLoggedIn
        });
    })
    .catch(err=>console.log(err));

};



exports.postEditPost = (req, res, next) => {

  const test = req.body.postid;
  const city = req.body.city;
  const name = req.body.name;
  const contact = req.body.contact;
  const address = req.body.address;
  const type = req.body.type;
  const description = req.body.description;
  const tdate = req.body.tdate;
  const status = req.body.status;


    Post.findOne({postId:test})
    .then(post => {
      console.log(post);
      if(!post)
      {
        console.log("Failed");  
        res.redirect('/');
      }
      post.city=city;
      post.name=name;
      post.contact=contact;
      post.address=address;
      post.type=type;
      post.description=description;
      post.tdate=tdate;
      post.status=status;
      return post.save();
    })
    .then(result =>
    {
        res.render('home', {
          pageTitle: 'Home',modal:1,
          isAuthenticated: req.session.isLoggedIn
        });
    })
    .catch(err=>console.log(err));
};
    
