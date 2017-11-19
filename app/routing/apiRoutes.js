
module.exports = function(app) {



	app.get("/api/friends", function(req, res) {
				
				connection.query("SELECT * FROM friend_list ", function(err, results){
					
					res.json(results);
					
				});
		
	});

	app.post("/api/friends", function(req, res) {
				
			 connection.query("INSERT INTO friend_list SET ?", req.body, function(error, results, fields){
				if(error) throw error;
				
					
				var currentFriend = [];
				var cf = req.body;
				currentFriend = [parseInt(cf.q1), parseInt(cf.q2), parseInt(cf.q3), parseInt(cf.q4), parseInt(cf.q5), parseInt(cf.q6), parseInt(cf.q7), parseInt(cf.q8), parseInt(cf.q9), parseInt(cf.q10)];
			
					
		});
	});
}
