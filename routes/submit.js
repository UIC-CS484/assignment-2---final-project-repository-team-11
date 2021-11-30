var express = require('express');
var router = express.Router();
var fs = require('fs');
var passwordValidator = require('password-validator');

var databaseFunction = require("../database_functions.js");
const bcrypt = require('bcryptjs');
const { Console } = require('console');


/* GET home page. */
router.post('/', function(req, res, next) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var senator1 = req.body.sen1;
    var senator2 = req.body.sen2;
    var rep = req.body.rep;

    //Enforcing strong password
    var schema = new passwordValidator();

    schema.is().min(8)
    schema.is().max(100)
    schema.has().uppercase()
    schema.has().digits()
    schema.has().not().spaces()

    var isValid = schema.validate(password)
    console.log(isValid)
    

    if(isValid===false)
    {
        var error = "Password is not strong";
        res.render('error', {error:error});
    }

    else{
        console.log("first_name: " + first_name + "last_name: " + last_name + " Email: " + email + " Password: " + password);

        'use strict';
            var randomValue = Math.random() * 123;
        let users = [{ 
            id: randomValue,
            first_name: first_name,
            last_name: last_name, 
            email: email,
            password: password,
            senator1: senator1,
            senator2: senator2,
            rep: rep
        }];
        
        //Hashes the password     
        var hashedPassword = bcrypt.hashSync(password, 10);
        console.log("hashed password" + hashedPassword);

        //Adds information to the database 
        databaseFunction.createUser(users[0].id, first_name, last_name, email, hashedPassword, senator1, senator2, rep);

        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);

        res.render('confirmation', { first_name : first_name, last_name: last_name});
    }

});

module.exports = router;