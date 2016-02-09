var express = require('express');
var PORT = process.env.PORT || 8090;
var GitHubApi = require("node-github");
var github = new GitHubApi({
    version: "3.0.0"
});



var app = express();




app.get('/add/:val1/:val2', function(req, res) {
  var total = parseInt(req.params.val1) + parseInt(req.params.val2);
  console.log(total);
  res.send(total);
});

app.get('/sub/:val1/:val2', function(req, res) {
  var total = parseInt(req.params.val1) - parseInt(req.params.val2);
  console.log(total);
  res.send(total);
});

app.get('/mult/:val1/:val2', function(req, res) {
  var total = parseInt(req.params.val1) * parseInt(req.params.val2);
  console.log(total);
  res.send(total);
});

app.get('/div/:val1/:val2', function(req, res) {
  var total = parseInt(req.params.val1) / parseInt(req.params.val2);
  console.log(total);
  res.send(total);
});



app.listen(PORT, function() {
  console.log('Listening on port %s', PORT);
});
