var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/createAccount', function(req, res, next) {
  res.render('createAccount', { title: 'Create Account' });
});

module.exports = router;