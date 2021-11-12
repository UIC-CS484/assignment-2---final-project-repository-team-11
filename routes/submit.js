var express = require('express');
var router = express.Router();
var fs = require('fs');
var passwordValidator = require('password-validator');

var databaseFunction = require("../database_functions.js");
const bcrypt = require('bcryptjs');


/* GET home page. */
router.post('/', function(req, res, next) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;

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
            password: password
        }];
        
        //Hashes the password 
        const hashedPassword = await bcrypt.hash(password, 10);

        //Adds information to the database 
        databaseFunction.createUser(id, first_name, last_name, email, hashedPassword);

        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);

        res.render('confirmation', { first_name : first_name, last_name: last_name});
    }

});

module.exports = router;