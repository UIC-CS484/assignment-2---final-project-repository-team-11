var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/signIn', function(req, res, next) {
  res.render('signIn', { title: 'Sign In' });
});

module.exports = router;