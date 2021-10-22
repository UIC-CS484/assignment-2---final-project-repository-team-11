var express = require('express');
var createAccount = require('./createAccount');
var signIn = require('./signIn');
const http = require('http')

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
