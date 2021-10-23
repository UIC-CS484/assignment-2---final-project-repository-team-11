const LocalStrategy = require('passport-local').Strategy;
<<<<<<< HEAD
let databaseOperations = require('../users.json');
=======
let users = require('../users.json');
>>>>>>> 3c14d10b78e802751a643ca04d35ce4bd0db43f2


module.exports = function(passport) {
console.log("Passport Function triggered");
//Passport pulls the the name variables from the name attribute in login form.  If different, you need to use whats on lines 10 and 11
<<<<<<< HEAD

=======
>>>>>>> 3c14d10b78e802751a643ca04d35ce4bd0db43f2
passport.use(new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password'
}, function(username, password, done) {
<<<<<<< HEAD

    var users = databaseOperations
    
    for (var index = 0; index < users.length; ++index) {

        var user = users[index];
        console.log(user.email);
=======
	console.log(username);
	//Search users.json file to see if user exist


    //let users = JSON.parse(dataStore);
    console.log(users);

    for (var index = 0; index < users.length; ++index) {

        var user = users[index];
       console.log(user.email);
>>>>>>> 3c14d10b78e802751a643ca04d35ce4bd0db43f2
        if(user.email == username && user.password == password){
			
          done(null, user);
        }
        else{
          done(null, false);
        }
    }
<<<<<<< HEAD

=======
    
>>>>>>> 3c14d10b78e802751a643ca04d35ce4bd0db43f2
}));

passport.serializeUser(function(user, done) {
	done(null, user); 
});

passport.deserializeUser(function(user, done) {
	done(null, user); //you can access with req.user
});

}