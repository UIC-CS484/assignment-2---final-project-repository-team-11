var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.post('/', function(req, res, next) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;

    //Enforcing Strong Password 
    //If password does not contain a capital letter or a number display error
    for(var i = 0; i < password.length; i++)
    {       
        var letter = password[i];
        
        //No capital letters/special characters in the password
        if(!(letter === letter.toUpperCase()))
        {
            var incorrect = "Password does not contain any special characters";
            res.render('error', {error:incorrect});
        }
    }

    if (password.length < 8){
        var error = "Password not long enough";
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
        
        let data = JSON.stringify(users);
        fs.writeFileSync('users.json', data);

        res.render('confirmation', { first_name : first_name, last_name: last_name});
    }

});

module.exports = router;