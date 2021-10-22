const LocalStrategy = require('passport-local').Strategy;
let users = require('../users.json');


module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {
	console.log(username);
	//Search users.json file to see if user exist


    //let users = JSON.parse(dataStore);
    console.log(users);

    for (var index = 0; index < users.length; ++index) {

        var user = users[index];
       console.log(user.email);
        if(user.email == username && user.password == password){
			
          done(null, user);
        }
        else{
          done(null, false);
        }
    }
    
}));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	done(null, user); //you can access with req.user
});

}