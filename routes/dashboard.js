var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let userInfo = req.user;

    let open_api = process.env.OPEN_SECRETS_API_KEY;
    let news_api = process.env.NEWS_API_KEY;
    console.log("on dashboard.js");
    console.log(req.user);
    
    res.render('dashboard', {userInfo, open_api, news_api});

    
    // console.log("on dashboard.js");
    // console.log(req.user);
    
    // res.render('dashboard', {userInfo});
    
});

module.exports = router;