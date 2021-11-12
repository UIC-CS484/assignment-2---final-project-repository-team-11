var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user;
    console.log("on dashboard.js");
    console.log(req.user);
    
    res.render('dashboard', {userInfo});
    
});

module.exports = router;