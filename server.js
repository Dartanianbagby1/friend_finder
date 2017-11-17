var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//======================================

var friends =[{	
	routeName:"dartanian",
	name: "dartanian",
	score:[5, 4, 3, 2, 1]
}, {
	routeName:"woky",
	name:"sleepy",
	score:[5, 4, 3, 2, 1]
}]; 
 
//======================================
app.get("/",function(req,res){

	res.sendFile(path.join(__dirname,"view.html"));
});
app.get("/add", function(req, res){
	res.sendFile(path.join(__dirname,"add.html"));

	app.get("/all", function(req,res){
		res.json(friends)
	})
})
app.get("/api/:friends?", function(req,res){
	var choice = req.params.friends;
	if(choice){
		console.log(choice);
	  for (var i = 0; i < friends.length; i++) {
	  	if (choice === friends[i].routeName) {
	  		return res.json(friends[i]);
	  	}
	  }
	  return res.send("None of friends found");
	}
	return res.json(friends);
})
app.post("/api/new",function(req,res){
	var newfreinds =req.body;
	console.log(newfreinds);
	friends.push(newfreinds);
	res.json(newfreinds);

});
//app.get("/add", function(req, res) {
//  res.sendFile(path.join(__dirname, "add.html"));
//});

//app.get("/:choice", function(req, res) {
//	var choice = req.params.choice;
//	console.log(choice);
//	res.end();
//	});
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
