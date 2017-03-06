require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const request = require('request');
const logger = require('morgan');
const config = require('../webpack.config');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// serve static files
app.use(express.static(path.join(__dirname, '../src/')));
app.use(express.static(path.join(__dirname, '../node_modules')));


// load passport strategies
const spotifyStrategy = require('./passport-spotify.js');

passport.use('spotify', spotifyStrategy);


// auth routes
app.get('/auth/spotify', passport.authenticate('spotify',  {
  // enter any passport specific information here
}), (req, res) => {
  // nothing happens here
});


app.get('/auth/spotify/callback', (req, res, next) => {
  passport.authenticate('spotify', (err, token, profile) => {
    if (err) {
      console.log('Error with login');
    } else {
      // signin successful, do what with it
      res.redirect(`/#/key/${token}`);
    }
  })(req, res, next);
});

app.get('/api/', (req, res) => {

});

// set port
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) {
    console.log('Error with server: ', err);
  } else {
    console.log('Server listening on port: ', port);
  }
});
