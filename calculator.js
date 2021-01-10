const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function(req, res) {
	var weight = Number(req.body.num1);
	var height = Number(req.body.num2);

	var result = weight / (height * height);
	res.send("Your BMI = " + result);

});
app.listen(port, function() {
	console.log("Server 3000 is up and running");
});
