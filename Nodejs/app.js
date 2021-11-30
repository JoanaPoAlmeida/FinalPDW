const express = require ("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res)=>{
    res.send("home page");
});

app.listen(4000,() =>{
    console.log("server started");
});

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'organize'
});

database.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("data base connected");
    }

})