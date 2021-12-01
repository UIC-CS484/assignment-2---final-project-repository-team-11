const LocalStrategy = require('passport-local').Strategy;
let dbOperations = require('../database_functions.js');
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
  console.log('passport function triggered');
  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function(email, password, done) {
      console.log("before db.get");
      dbOperations.db.get('SELECT * FROM USER WHERE email = ?', email, function(err, row) {
        console.log("after db.get");
        if (!row) {
          return done(null, false, { message: 'Wrong credentials.' });
        }
        if (bcrypt.compareSync(password, row.password)) {
          return done(null, row);
        } else {
          return done(null, false, { message: 'Wrong credentials..' });
        }
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    console.log('passport.serializeUser')
    //console.log(user)
    return done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    console.log('passport.deserializeUser')
    done(null, user);
  });
};




