var path = require("path");

 module.exports = function(app) {
 	console.log('htmlroutes');
	app.get("/", function(req, res){
	res.sendFile(path.join(__dirname,"/../public/home.html"));
});
app.get("/survey", function(req, res){
	console.log('surveyroutes')
	res.sendFile(path.join(__dirname,"/../public/survey.html"));
});
}


	