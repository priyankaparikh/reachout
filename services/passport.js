const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth20').Strategy
const keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  // user.id is the primary key or unique identifier of the instance in mongo
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // turn an id into a mongoose model instance
  User.findById(id)
  .then(user => {
    done(null, user);
  })
})

// new GoogleStrategy creates a new instance of the passport GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
    clientID: keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    },

    async (accessToken, refreshToken, profile, done) => {
      // instantiating a new user and calling a method .save
      const existingUser = await User.findOne({ googleID: profile.id })
      // existing user is a model instance that represents a user who is found
      if (existingUser) {
        done(null, existingUser);
      } else {
        // User and user are two seperate instances of the same user.
        const user = await new User({ googleID: profile.id }).save()
        done(null, user);
            // saving a record to a database is an asynchronous operation
      }
    })
  )
);
