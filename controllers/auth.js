const User = require('../models/user');
const bcrypt= require('bcryptjs');

exports.postAddUser = (req, res, next) => {

     
    const username = req.body.username;
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    
    return bcrypt
      .hash(password,12)
      .then(hashedPassword =>{
            const user= new User
            ({username:username,email:email,
            name:name,password:hashedPassword});
      
            user
            .save()
            .then(result => {
                res.render('home', {
                  pageTitle: 'Home',modal:1,path:"/",
                  isAuthenticated: req.session.isLoggedIn
                });
            })
            .catch(err=>{
                console.log(err);
            });
      }) 
      .catch(err=>{
        console.log(err);
      });
    
    };


exports.postLogin = (req, res, next) => {
    
  const username = req.body.username;
  const password = req.body.password;
 
  User.findOne({username:username})
    .then(user => {

        if(!user)
        {
              return res.redirect('/');
        }
        bcrypt
        .compare(password,user.password)
        .then(doMatch => {
              if(doMatch)
              {
                console.log("Login Successful");
                req.session.isLoggedIn=true;
                req.session.user = user;
                console.log(req.session.user.username);
                 req.session.save(err => {
                  console.log(err);
              });
            }
              res.redirect('/');
          })
        .catch(err=>{
          console.log(err);
          res.redirect('/');
        });
    })
    
  };


exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err);
    res.redirect('/');
  });
};

    
