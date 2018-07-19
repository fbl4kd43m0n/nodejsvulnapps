/*
eval() is Evil

Other Evils
setInterval(code, 2)
setTimeout(code, 2)
new Function(code)
*/

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  var resp=eval("("+req.query.name+")");
  res.send('Response</br>'+resp);
});
app.listen(9000);