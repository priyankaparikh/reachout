const passport = require('passport')

// exporting both routes as a function to the index.js file
module.exports = app => {
  app.get('/auth/google',
            passport.authenticate('google', {
              // GoogleStrategy  has an internal identifier called 'google'
              scope: ['profile', 'email']
              // the scope specifies to google what information we are loooking for
              }
            )
          );

  app.get('/auth/google/callback',
            passport.authenticate('google')
          );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
