var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
});

router.post('/', (req, res, next) => {
	console.log("here");
	passport.authenticate('local', {
		successRedirect: '/dashboard',
		failureRedirect: '/'
	})(req, res, next);


});

module.exports = router;