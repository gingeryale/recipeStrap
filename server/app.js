var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

//var moviesRouter = require('./routes/movies.routes');
var addrecRouter = require('./routes/addrec.routes');
var addcatRouter = require('./routes/addcat.routes');
var usersRouter = require('./routes/users.routes');
var myDbHelper = require('./helpers/db.helper');
myDbHelper.createDBAndTables();

var app = express();
app.use(session({
  secret: 'express',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/api/movies', moviesRouter);
var addrecRouter = require('./routes/addrec.routes');
app.use('/api/rec', addrecRouter);
app.use('/api/cat', addcatRouter);
app.use('/api/users', usersRouter);
 

module.exports = app;
