var http = require("http");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const sqlite3 = require('sqlite3')
var http = require('http');

var urlencodedParser = bodyParser.urlencoded({ extended: true });
 
// Running Server Details.
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at %s:%s Port", host, port)
});

let db = new sqlite3.Database("./a3", (err) => { 
    if (err) { 
        console.log('Error when creating the database', err) 
    } else { 
       
        // /* Put code to create table(s) here */

        var sql1 = db.run("CREATE TABLE students (studentid VARCHAR(20), studentname VARCHAR(20) , programgroup VARCHAR(20))");
        console.log(sql1) 
        var sql2 = db.run("CREATE TABLE classes (classid VARCHAR(20), classname VARCHAR(255) , room VARCHAR(25),datesession VARCHAR(20))");
        console.log(sql1) 
        var sql3 = db.run("CREATE TABLE enrollment (enrollmentid VARCHAR(20), studentid VARCHAR(20) , classid VARCHAR(25))");

        
      
    } 
})



 
   
 