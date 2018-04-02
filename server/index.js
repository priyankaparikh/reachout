const express = require('express');
const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').strategy
const app = express()

passport.use(new GoogleStrategy());
// new GoogleStrategy creates a new instance of the passport GoogleStrategy

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

app.listen(5000);
