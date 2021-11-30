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

//Create a Members Table
let createMember = (id, CID, CRPName) =>{
	var memberUserSql ='INSERT INTO MEMBER (CID, CRPName) VALUES (?,?)'
	var params =[null, CID, CRPName];

	db.run(memberUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

//Create CRP Industry Codes Table
let createCRP = (id, Catname, Catorder) =>{
	var crpSql ='INSERT INTO CRP (Catname, Catoder) VALUES (?,?,?)'
	var params =[null, Catname, Catorder];

	db.run(crpSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

//Create a User
let createUser = (id, first_name, last_name, email, password, senator1, senator2, rep) =>{
	var createUserSql ='INSERT INTO USER (ID, first_name, last_name, email, password, senator1, senator2, rep, sen1Id, sen2Id, repId) VALUES (?,?,?,?,?,?,?,?)'
	var params =[null, first_name, last_name, email, password, senator1, senator2, rep, null, null, null];

	db.run(createUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Created");
		console.log(`Rows inserted ${this.changes}`);	  
	});
}

//Retrieve a User by first_name
let retrieveUser = (email) =>{
	var retrieveUserSql ='SELECT * FROM USER WHERE email = ?'
	var params =[email];

	db.run(retrieveUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Found");
		console.log(`Retrieved user information ${this.changes}`);	  
	});
}

//Retrieve a User by first_name
let retrieveSenator = (senator1) =>{
	var retrieveUserSql ='SELECT CID FROM CID WHERE CRP_Name = ?'
	var retrieveId = `UPDATE USER SET sen1Id = ${retrieveUserSql} WHERE senator1 = ?`
	var params =[senator1];

	db.run(retrieveUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("Senator Found");
		console.log(`Retrieved user information ${this.changes}`);	  
	});

	db.run(retrieveId, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("Senator Found");
		console.log(`Retrieved user information ${this.changes}`);	  
	});
}

//Update user information based on given id 
let updateUser = (id, first_name, last_name, email) =>{
	var updateUserSql ='UPDATE USER SET first_name = ?, last_name = ?, email = ? WHERE id = ?'
	var params =[first_name];

	db.run(updateUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User Found, updated information");
		console.log(`Updated user information ${this.changes}`);	  
	});
}

//Delete User Information 
let deleteUser = (id) =>{
	var deleteUserSql ='DELETE FROM USERS WHERE id = ?'
	var params =[id];

	db.run(deleteUserSql, params, function(err){
		if (err){
			return console.log(err.message);
		}
		console.log("User found and deleted");
		console.log(`Deleted user information ${this.changes}`);	  
	});
}

module.exports = {createUser, retrieveUser, updateUser, deleteUser};