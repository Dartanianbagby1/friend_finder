var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//======================================

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
