var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "trokinus99",
database: "OrbitalCRUD"
});

con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
});
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.post('/api/insert', function(req, res) {
    var user2 = req.body;
    var Username = req.body.Username;
    var Password = req.body.Password;
    var query2 = con.query("INSERT INTO `users` (`username`, `password`) VALUES (?,?);", [Username,Password], function(err, result)                     
    {
    });
    res.end('Success2');
    });


app.listen(3001, function() {
console.log('Example app listening on port 3001!');
});