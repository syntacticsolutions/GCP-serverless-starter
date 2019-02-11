// These are the Node.js modules used for this Express app.
// They are installed using NPM
var express = require('express');
var cors = require("cors");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// This creates the Express app which is configured below.  
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api', require('./api'))



// Important later!  This exports the app object as a module.
// This comes into play when we deploy the application to 
// Cloud Functions.
module.exports = app;