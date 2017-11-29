var connection = require("../database/connection.js")

module.exports = function(app) {
	app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
    console.log('function(app)');
    app.get("/api/get-friend", function(req, res) {
        console.log("this is running - app.get('api/get-friend')");
        connection.query("SELECT * FROM friend_list ", function(err, results) {
            console.log("connection query running");
            res.json(results);

        }); //closes connection

    }); //closes app.get


    app.post("/api/create-friend", function(req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        console.log("this is running -> app.post('api/create-friend')");
        //var insertSql = "INSERT INTO friend_list (friend_name,friend_photo_url,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) VALUES (";
        console.log(req.body);
        var currentFriend = [];
        var cf = req.body;
        for(var i = 1; i <= 10; i++) {
            var index = 'q' + i;
            currentFriend.push( parseInt(cf[index],10) );
        }
        var answerSum = currentFriend.reduce((accumulator, currentValue) => accumulator + currentValue);
        var values = req.body;
        values.q_sum = answerSum;
        var query = connection.query("INSERT INTO friend_list SET ?", values, function(error, results, fields) {
            if (error) {
                throw error;
            }
            console.log("the insert into DB was successful from the route");

            
            
            console.log("TRYING TO SEND MATCH");
            //	console.log(match);
            analyzeData(friend_id,answerSum, function(match) {
                res.send(match);
            });
        }); //closes query
    }); //closes app.post

    function analyzeData(friend_id,answerSum, cb) {
        // q_sum - Sum of all the answers
        

        var query = "SELECT * FROM friend_list WHERE friend_id != "
        + friend_id + " ORDER BY ABS(q_sum - " + answerSum + ')';

        connection.query(query, function(err, data) {
            if (err) throw err;
               
            var perMatch = (100 -Math.ABS((data.q_sum-answerSum)*2)) + "%";
            console.log("Percent match = " + perMatch);
            displayMatch(bFF, perMatch, cb);
        }); //closes query
    } // closes analyzeData

    function displayMatch(bFF, perMatch, cb) {
        console.log(bFF);
        connection.query("SELECT friend_name, friend_photo_url FROM friend_list WHERE friend_id = ?", bFF, function(err, friends) {
            if (err) throw err;
            console.log("displayMatch running");
            console.log(friends);
            if(friends.length > 0) {
                var match = {
                    name:friends[0].friend_name,
                    photo: friends[0].friend_photo_url,
                    percent: perMatch
                };
                console.log(match);
                cb(match);
            }
            

        }); //closes connection

    } //closes displayMatch

}