//CRUD options are defined here 

var sqlite3 = require('sqlite3').verbose() //npm install sqlite3

//Creating a new database instance - Indication of connected database
//Before peforming any operations to database, make sure database is connected.
let db = new sqlite3.Database('./database.sqlite', (err) => {
	if (err) {
	  // Cannot open database
	  console.error(err.message)
	  throw err
	}else{
		//Successful database connection
		console.log('Connected to the SQLite database.') 
	}
});

//Create a User
let createUser = (id, first_name, last_name, email, password) =>{
	var createUserSql ='INSERT INTO users (ID, first_name, last_name, email, password) VALUES (?,?,?)'
	var params =[null, first_name, last_name, email, password];

	db.run(createUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}
createUser(null, "Gurleen", "Kaur", "testing123@uic.edu", "password")

module.exports = {createUser};