const LocalStrategy = require('passport-local').Strategy;
// let databaseOperations = require('../users.json');
let db = require('../database_functions.js');


module.exports = function (passport) {
  console.log('passport authentication');
  passport.use(new LocalStrategy(
    function(username, password, done) {
      db.get('SELECT * FROM USER WHERE username = ?', username, function(err, row) {
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
    console.log(user)
    return done(null, user.id);
  });

  passport.deserializeUser(function(user, done) {
    console.log('passport.deserializeUser')
    console.log(id)
    done(null,user);
  });
};