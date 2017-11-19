var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//======================================

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  password: "",
  database: "friends_db"
});

connection.connect(function(err) {
  if (err) throw err;

});
//======================================


//app.get("/add", function(req, res) {
//  res.sendFile(path.join(__dirname, "add.html"));
//});

//app.get("/:choice", function(req, res) {
//	var choice = req.params.choice;
//	console.log(choice);
//	res.end();
//	});
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
