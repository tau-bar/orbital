var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "trokinus99",
database: "CRUDDataBase"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
//var sql = "INSERT INTO users (name, job) VALUES ('e211', 'Highway 37')";
//con.query(sql, function (err, result) {
//if (err) throw err;
//console.log("1 record inserted");
//});
});
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, res) {
// Get sent data.
var user = req.body;
// Do a MySQL query.
var query = con.query("INSERT INTO `movie_reviews` (`username`, `password`) VALUES ('inception', 'good movie');", function(err, result)                     
{
// Neat!
});
res.end('Success');
});

app.post('/api/insert', function(req, res) {
    // Get sent data.
    var user2 = req.body;
    // Do a MySQL query.
    var username = req.body.username;
    var password = req.body.password;
    var query2 = con.query("INSERT INTO `movie_reviews` (`username`, `password`) VALUES (?,?);", [username,password], function(err, result)                     
    {
    // Neat!
    });
    res.end('Success2');
    });

app.post('/api/select', function(req, res) {
    // Get sent data.
    var user2 = req.body;
    // Do a MySQL query.
    var username = req.body.username;
    var password = req.body.password;
    var query2 = con.query("SELECT * FROM `movie_reviews` WHERE username = (`username`) VALUES (?);", [username], function(err, result)                     
    {
    // Neat!
    });
    res.end('Success2');
    });


app.listen(3001, function() {
console.log('Example app listening on port 3001!');
});