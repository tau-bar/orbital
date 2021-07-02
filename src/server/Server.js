const express = require('express');
const mysql = require('mysql');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "trokinus99",
        database: "Orbital"
    }
)

app.listen(3000, () => {
  console.log("server running");
});

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    

    db.query("INSERT INTO Orbital (username,password) VALUES (?,?)", [username, password], (err, result) => 
    {
        console.log(err);
    })
})