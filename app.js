const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();
const errorController = require('./controllers/error');

const MONGODB_URI = "mongodb+srv://admin:admin@cluster0.8cny6.mongodb.net/HelpingHands";  //?retryWrites=true&w=majority
const mongoose = require('mongoose');
const store = new MongoDBStore({
    uri : MONGODB_URI,
    collection:'sessions'
});

app.set('view engine','ejs');
app.set('views','views');

const userRoutes = require('./routes/user');
const loginRoutes = require('./routes/auth');
const watchListRoutes = require('./routes/watchlist');
const homeRoutes = require('./routes/home');
const whyusRoutes = require('./routes/whyus');
const howitworksRoutes = require('./routes/howitworks');
const contactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
app.use(session({
  secret : 'my secret',
  resave:false,
  saveUninitialized:false,
  store:store
}));

app.use('/user', userRoutes);
app.use('/login',loginRoutes);
app.use(watchListRoutes);
app.use(whyusRoutes);
app.use(howitworksRoutes);
app.use(contactRoutes);

app.use(homeRoutes);

app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(result => {
      console.log("Connected to DB");
      app.listen(process.env.PORT || 3000,()=>{
            console.log(`Server running at http://localhost:${3000}/`);
      });
  })
  .catch(err => {
    console.log(err);
  });
