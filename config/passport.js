const LocalStrategy = require('passport-local').Strategy;
//let databaseOperations = require('../users.json');


module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {

    // var users = databaseOperations
    
    // for (var index = 0; index < users.length; ++index) {

    //     var user = users[index];
    //     console.log(`here email is: ${user.email}`);
    //     console.log(`but email is: ${username}`);
    //     if(user.email == username && user.password == password){
			
    //       done(null, user);
    //     }
    //     else{
    //       done(null, false);
    //     }
    // }
}));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	done(null, user); //you can access with req.user
});

}