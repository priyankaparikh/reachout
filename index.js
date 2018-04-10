const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser');
require('./models/user')
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json());
app.use(
  // pass the cookiesession and call it and provide it with a
  //configuration object which expects 2 different parameter
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// calling exported function from passport.js and passing the
// app object as a paramenter
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

app.listen(5000);
