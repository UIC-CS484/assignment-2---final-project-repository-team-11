var express = require('express');
var router = express.Router();
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

router.get('/', function(req, res, next) {
    res.render('createAccount', {title: 'Create Account'});
});

module.exports = router;