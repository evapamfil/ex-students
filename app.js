var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

//CONNECTION WINDOWS
var connection = function () {
    return mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'evaluations'
    });
}

//CONNECTION MAC
/*var connection = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'evaluation',
        socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
    });
}*/

var app = express();

// we add to express the body-parser add-on allowing us to read req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Root = localhost:1337/api/students

// POST on students
app.post('/api/students', function(req, res){
	
	var q = "INSERT INTO students (firstname, lastname, age, class, gender) VALUES ('"+ req.body.firstname +"', '"+ req.body.lastname +"', "+ req.body.age +", "+ req.body.class+", '"+ req.body.gender +"');";

	var co = connection();

	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  console.log(results)
	});

	co.end();


	res.send('bravo'); 
});





app.get('/api/students', function(req, res){
    var q = 'SELECT * FROM students '; 
    
    var co = connection();

	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  res.send(results)
	});

	co.end();
    
    
})

app.post('/api/notes', function(req, res){
	
	var q = "INSERT INTO notes (student, mark) VALUES ("+ req.body.student +", "+ req.body.mark +");";

	var co = connection();

	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  console.log(results)
	});

	co.end();


	res.send('bravo'); 
});





app.get('/api/notes', function(req, res){
    var q = 'SELECT * FROM notes '; 
    
    var co = connection();

	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  res.send(results)
	});

	co.end();
    
    
})

app.listen(1337);