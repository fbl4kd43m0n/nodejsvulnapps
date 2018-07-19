var express = require('express'); //usando express framework
var app = express();
app.get('/', function(req, res) {
  res.send('id: ' + req.query.id);
  console.log("GET / id="+req.query.id);
});
app.listen(9000);