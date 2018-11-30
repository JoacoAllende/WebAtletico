angular.module("MiModulo",[])
.controller("MiControlador",function($scope){
	$scope.prueba = "andaa";
});

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
