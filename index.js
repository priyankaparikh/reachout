const express = require('express');
require('./services/passport');

const app = express()

// calling exported function from passport.js and passing the
// app object as a paramenter
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

app.listen(5000);
