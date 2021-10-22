var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createAccount = require('./routes/createAccount');
var signIn = require('./routes/signIn');
var submit = require('./routes/submit');
var submitLogin = require('./routes/loginSubmit');
var dashboard = require('./routes/dashboard.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createAccount', createAccount);
app.use('/signIn', signIn);
app.use('/submit', submit);
app.use('/loginSubmit', submitLogin);
app.use('/dashboard', dashboard);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendFile(`${__dirname}/index.hbs`, (err) => {
    if (err) {
      console.log(err);
      next(createError(404));
      res.end(err.message);
    }
  });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.hbs`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

app.get('/signIn', (req, res) => {
  res.sendFile(`${__dirname}/signIn.hbs`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

app.get('/createAccount', (req, res) => {
  res.sendFile(`${__dirname}/createAccount.hbs`, (err) => {
    if (err) {
      console.log(err);
      res.end(err.message);
    }
  });
});

module.exports = app;
